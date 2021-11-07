import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCloudOff } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCloudOff />
 * }
 * ```
 *
 * @category Component
 */
export const IconCloudOff = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M24 15c0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81zM3.71 4.56c-.39.39-.39 1.02 0 1.41l2.06 2.06h-.42c-3.28.35-5.76 3.34-5.29 6.79C.46 17.84 3.19 20 6.22 20h11.51l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.12 4.56c-.39-.39-1.02-.39-1.41 0zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8H6z"/></svg>`}
    />
  )
})
