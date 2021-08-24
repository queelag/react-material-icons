import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSnowmobile } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSnowmobile />
 * }
 * ```
 *
 * @category Component
 */
export function IconSnowmobile(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M11,6c0,0.55,0.45,1,1,1h1.25l1.45,1.3L11,11l-9.12-0.96C0.88,9.93,0,10.72,0,11.73c0,0.75,0.49,1.41,1.21,1.63l3.33,1 l-3.49,1.88C-0.77,17.22-0.07,20,2,20h6c2.21,0,4-1.79,4-4h4l2,2h-2c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c1.13,0,2.11-0.62,2.63-1.55 c0.36-0.65-0.15-1.45-0.9-1.45c-0.34,0-0.68,0.16-0.84,0.47C21.72,17.78,21.38,18,21,18h-0.17l-2.2-2.2C20.58,15.37,22,14.4,22,13 c0-0.89-7.72-7.75-7.72-7.75C14.1,5.09,13.87,5,13.62,5H12C11.45,5,11,5.45,11,6z M8,18H2l5.25-2.83L10,16C10,17.1,9.11,18,8,18z"/></svg>`}
    />
  )
}
