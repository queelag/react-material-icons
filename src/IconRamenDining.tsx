import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRamenDining } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRamenDining />
 * }
 * ```
 *
 * @category Component
 */
export const IconRamenDining = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,2.84L22,2.84c0-0.45-0.39-0.79-0.83-0.75L4.89,3.9C4.38,3.95,4,4.38,4,4.89V12H3.08c-0.6,0-1.08,0.53-1,1.13 C2.52,16.33,4.83,19,8,20.25V21c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-0.75c3.17-1.25,5.48-3.92,5.92-7.12 c0.08-0.6-0.4-1.13-1-1.13H10.5V8h10.75C21.66,8,22,7.66,22,7.25v0c0-0.41-0.34-0.75-0.75-0.75H10.5V4.78l10.83-1.19 C21.71,3.54,22,3.22,22,2.84z M6.5,5.22V6.5h-1V5.34L6.5,5.22z M5.5,8h1v4h-1V8z M9,12H8V8h1V12z M9,6.5H8V5.06l1-0.11V6.5z"/></g></svg>`}
    />
  )
})
