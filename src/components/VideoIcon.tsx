import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

export const VideoIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="gray" strokeWidth={1.5} />
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10 9 5 3-5 3V9Z"
    />
  </Svg>
)

export const VideoIconFocused = (props: SvgProps) => (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} stroke="#fff" strokeWidth={1.5} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m10 9 5 3-5 3V9Z"
      />
    </Svg>
  )
