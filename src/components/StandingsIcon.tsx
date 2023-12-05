import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const StandingIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2 14h5V4h10v7h5v9H2v-6Z"
    />
    <Path stroke="gray" strokeWidth={2} d="M12 8v4" />
  </Svg>
)

export const StandingIconFocused = (props: SvgProps) => (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 14h5V4h10v7h5v9H2v-6Z"
      />
      <Path stroke="#fff" strokeWidth={2} d="M12 8v4" />
    </Svg>
  )