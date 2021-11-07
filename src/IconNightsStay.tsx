import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNightsStay } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNightsStay />
 * }
 * ```
 *
 * @category Component
 */
export const IconNightsStay = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M11.1,12.08c-2-3.88-0.92-7.36,0.07-9.27c0.19-0.36-0.12-0.77-0.53-0.72C5.62,2.77,1.78,7.16,1.99,12.41 c0.01,0,0.01,0,0.01,0.01C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18 c0,1.52-0.87,2.83-2.12,3.51c0.98,0.32,2.03,0.5,3.11,0.5c3.13,0,5.92-1.44,7.76-3.69c0.26-0.32,0.04-0.79-0.37-0.82 C16.89,17.37,13.1,15.97,11.1,12.08z"/></g><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>`}
    />
  )
})
