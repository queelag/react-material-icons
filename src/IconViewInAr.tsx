import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconViewInAr } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconViewInAr />
 * }
 * ```
 *
 * @category Component
 */
export const IconViewInAr = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M2,6c0.55,0,1-0.45,1-1V4c0-0.55,0.45-1,1-1h1c0.55,0,1-0.45,1-1S5.55,1,5,1H4C2.34,1,1,2.34,1,4v1C1,5.55,1.45,6,2,6z"/><path d="M5,21H4c-0.55,0-1-0.45-1-1v-1c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1v1c0,1.66,1.34,3,3,3h1c0.55,0,1-0.45,1-1 S5.55,21,5,21z"/><path d="M20,1h-1c-0.55,0-1,0.45-1,1s0.45,1,1,1h1c0.55,0,1,0.45,1,1v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1V4 C23,2.34,21.66,1,20,1z"/><path d="M22,18c-0.55,0-1,0.45-1,1v1c0,0.55-0.45,1-1,1h-1c-0.55,0-1,0.45-1,1s0.45,1,1,1h1c1.66,0,3-1.34,3-3v-1 C23,18.45,22.55,18,22,18z"/><path d="M19,14.87V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.69,0.09-1,0.27L6,7.39 C5.38,7.75,5,8.41,5,9.13v5.74c0,0.72,0.38,1.38,1,1.73l5,2.88c0.31,0.18,0.65,0.27,1,0.27s0.69-0.09,1-0.27l5-2.88 C18.62,16.25,19,15.59,19,14.87z M11,17.17l-4-2.3v-4.63l4,2.33V17.17z M12,10.84L8.04,8.53L12,6.25l3.96,2.28L12,10.84z M17,14.87l-4,2.3v-4.6l4-2.33V14.87z"/></g></g></svg>`}
    />
  )
})
