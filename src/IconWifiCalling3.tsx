import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconWifiCalling3 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconWifiCalling3 />
 * }
 * ```
 *
 * @category Component
 */
export const IconWifiCalling3 = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21.54,4.8C20.17,3.67,18.41,3,16.49,3c-1.92,0-3.67,0.67-5.05,1.8c-0.34,0.28-0.36,0.79-0.05,1.1l0.01,0.01 c0.27,0.27,0.7,0.29,1,0.05c1.12-0.91,2.54-1.45,4.09-1.45s2.97,0.55,4.09,1.45c0.3,0.24,0.73,0.23,1-0.05l0.01-0.01 C21.9,5.59,21.88,5.07,21.54,4.8z"/><path d="M19.45,8.04L19.45,8.04c0.33-0.33,0.28-0.88-0.11-1.15C18.54,6.33,17.55,6,16.49,6s-2.04,0.33-2.85,0.89 c-0.38,0.27-0.44,0.82-0.11,1.15l0,0c0.25,0.25,0.65,0.31,0.94,0.1c0.57-0.4,1.27-0.64,2.02-0.64s1.45,0.24,2.02,0.64 C18.8,8.35,19.2,8.29,19.45,8.04z"/><path d="M16.49,8.9c-0.32,0-0.62,0.08-0.89,0.21c-0.3,0.15-0.34,0.56-0.11,0.79l0.65,0.65c0.2,0.2,0.51,0.2,0.71,0l0.65-0.65 c0.23-0.23,0.19-0.64-0.11-0.79C17.12,8.97,16.81,8.9,16.49,8.9z"/><path d="M15.63,14.4l-2.52,2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c0.23-0.24,0.33-0.57,0.27-0.9L9.13,3.8C9.04,3.34,8.63,3,8.15,3 L4,3C3.44,3,2.97,3.47,3,4.03C3.17,6.92,4.05,9.63,5.43,12c1.58,2.73,3.85,4.99,6.57,6.57c2.37,1.37,5.08,2.26,7.97,2.43 c0.56,0.03,1.03-0.44,1.03-1l0-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73C16.2,14.07,15.86,14.17,15.63,14.4z"/></g></g></svg>`}
    />
  )
})
