import type { ComponentType } from "react"

export interface CubesProps {
  gridSize?: number
  cubeSize?: number
  maxAngle?: number
  radius?: number
  easing?: string
  duration?: { enter?: number; leave?: number }
  cellGap?: number | { row?: number; col?: number }
  borderStyle?: string
  faceColor?: string
  shadow?: boolean | string
  autoAnimate?: boolean
  rippleOnClick?: boolean
  rippleColor?: string
  rippleSpeed?: number
  className?: string
}

declare const Cubes: ComponentType<CubesProps>
export default Cubes
