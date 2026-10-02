"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/printers.glb";

// Tuned by hand via OrbitControls/TransformControls, then read off the
// console and baked in here -- see replace-the-shader-card-abstract-kay plan.
const FINAL_POSITION: [number, number, number] = [11.07, 6.36, 12.01];
// Tuned against a squarish aspect-[4/3] box; this row is full-width but much
// shorter, so the same zoom clips the model's top -- pulled back to fit the
// new, wider-than-tall frame.
const FINAL_ZOOM = 386.78 * 0.95;
const LIGHT_POSITION: [number, number, number] = [2.89, 2.32, -0.91];

const START_ZOOM = FINAL_ZOOM * 0.6;
const ENTRANCE_ROTATION_DEG = 32;
const SETTLE_PAN_FRACTION = 0.14;
// Gentle perpetual back-and-forth once settled, in degrees and radians/sec.
const IDLE_SWAY_DEG = 4;
const IDLE_SWAY_SPEED = 0.3;

function rotateY(
  [x, y, z]: [number, number, number],
  deg: number,
): [number, number, number] {
  const rad = (deg * Math.PI) / 180;
  return [
    x * Math.cos(rad) + z * Math.sin(rad),
    y,
    -x * Math.sin(rad) + z * Math.cos(rad),
  ];
}

const START_POSITION = rotateY(FINAL_POSITION, ENTRANCE_ROTATION_DEG);

export default function PrinterShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = wrapperRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      {/* always rendering (not gated on inView) so the zoomed-out/rotated
          start pose is actually visible before the section scrolls into
          view -- otherwise there's nothing to visibly transition *from*. */}
      <Canvas shadows>
        <CameraRig inView={inView} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={LIGHT_POSITION}
          intensity={2.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-1.5}
          shadow-camera-right={1.5}
          shadow-camera-top={1.5}
          shadow-camera-bottom={-1.5}
          shadow-camera-near={0.1}
          shadow-camera-far={10}
        />
        <Suspense fallback={null}>
          <PrinterModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

function CameraRig({ inView }: { inView: boolean }) {
  const cameraRef = useRef<THREE.OrthographicCamera>(null);
  const panRef = useRef(0);
  const rightRef = useRef(new THREE.Vector3());

  useFrame((state) => {
    const camera = cameraRef.current;
    if (!camera) return;
    const sway = inView
      ? Math.sin(state.clock.elapsedTime * IDLE_SWAY_SPEED) * IDLE_SWAY_DEG
      : 0;
    const [tx, ty, tz] = inView
      ? rotateY(FINAL_POSITION, sway)
      : START_POSITION;
    camera.position.lerp(new THREE.Vector3(tx, ty, tz), 0.012);
    camera.zoom = THREE.MathUtils.lerp(
      camera.zoom,
      inView ? FINAL_ZOOM : START_ZOOM,
      0.012,
    );

    // settle with the scene shifted right in frame, by panning the lookAt
    // target left along the camera's own right vector (not world X, since
    // that stays correct regardless of the camera's current angle).
    panRef.current = THREE.MathUtils.lerp(
      panRef.current,
      inView ? SETTLE_PAN_FRACTION : 0,
      0.012,
    );
    rightRef.current.setFromMatrixColumn(camera.matrixWorld, 0);
    const visibleWidth = state.size.width / camera.zoom;
    const target = rightRef.current
      .clone()
      .multiplyScalar(-panRef.current * visibleWidth);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
  });

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      position={START_POSITION}
      zoom={START_ZOOM}
    />
  );
}

function PrinterModel() {
  const { scene } = useGLTF(MODEL_PATH);

  useMemo(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      child.castShadow = true;
      child.receiveShadow = true;
    });
  }, [scene]);

  return <primitive object={scene} />;
}

useGLTF.preload(MODEL_PATH);
