import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconBusAlert } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconBusAlert />
 * }
 * ```
 *
 * @category Component
 */
export const IconBusAlert = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><g><path d="M4,11V8h7.29c-0.77-2.6,0.21-4.61,0.37-4.97C2.97,2.67,2,5.02,2,7v9.5c0,0.95,0.38,1.81,1,2.44v1.56 C3,21.33,3.67,22,4.5,22h0C5.33,22,6,21.33,6,20.5V20h8v0.5c0,0.82,0.67,1.5,1.5,1.5h0c0.82,0,1.5-0.67,1.5-1.5v-1.56 c0.62-0.63,1-1.49,1-2.44V13c-1.91,0-3.63-0.76-4.89-2H4z M6.5,17C5.67,17,5,16.33,5,15.5S5.67,14,6.5,14S8,14.67,8,15.5 S7.33,17,6.5,17z M15,15.5c0,0.83-0.67,1.5-1.5,1.5S12,16.33,12,15.5s0.67-1.5,1.5-1.5S15,14.67,15,15.5z"/></g><g><path d="M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,6.5C18.5,6.78,18.28,7,18,7s-0.5-0.22-0.5-0.5v-3 C17.5,3.22,17.72,3,18,3s0.5,0.22,0.5,0.5V6.5z M18.5,8.5C18.5,8.78,18.28,9,18,9s-0.5-0.22-0.5-0.5S17.72,8,18,8 S18.5,8.22,18.5,8.5z"/></g></g></g></svg>`}
    />
  )
})
