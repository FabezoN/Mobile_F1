import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const LatestIcon = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M4 2h16v20H4z"
    />
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 6h8v4H8z"
    />
    <Path
      stroke="gray"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8 14h8M8 18h5"
    />
  </Svg>
)

export const LatestIconFocused = (props: SvgProps) => (
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
        strokeWidth={1.5}
        d="M4 2h16v20H4z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 6h8v4H8z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 14h8M8 18h5"
      />
    </Svg>
  )
