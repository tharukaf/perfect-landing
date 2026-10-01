import type { CSSProperties, ComponentType } from "react"

export interface TechTextProps {
  text?: string
  fontFamily?: string
  fontWeight?: number
  fontSize?: number
  letterSpacing?: number
  color?: string
  accentColor?: string
  reach?: number
  softness?: number
  dashLength?: number
  dashGap?: number
  strokeWidth?: number
  lineStyle?: "dashed" | "solid"
  reveal?: "area" | "letter" | "off"
  specks?: number
  selection?: boolean
  labels?: boolean
  draggable?: boolean
  sweep?: boolean
  speed?: number
  className?: string
  style?: CSSProperties
}

declare const TechText: ComponentType<TechTextProps>
export default TechText
