import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRtt } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRtt />
 * }
 * ```
 *
 * @category Component
 */
export const IconRtt = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M8.76,4.69L8.15,8.58c-0.12,0.78,0.48,1.49,1.28,1.49h0c0.64,0,1.18-0.46,1.28-1.09l0.53-3.41h2.58L11.8,18.43h-1.24 c-0.63,0-1.16,0.46-1.26,1.08l0,0.01C9.17,20.3,9.77,21,10.56,21h4.67c0.63,0,1.17-0.46,1.26-1.08l0-0.01 c0.12-0.78-0.48-1.48-1.26-1.48h-0.86l2-12.86h2.58l-0.47,3.01c-0.12,0.78,0.48,1.49,1.28,1.49h0.03c0.64,0,1.18-0.46,1.28-1.09 l0.57-3.67C21.83,4.09,20.89,3,19.66,3h-8.92C9.76,3,8.92,3.72,8.76,4.69z M8,5H4.86C4.36,5,3.94,5.36,3.87,5.85l0,0 C3.77,6.45,4.24,7,4.86,7h2.83L8,5z M7.39,9H4.25C3.75,9,3.33,9.36,3.26,9.85l0,0C3.16,10.45,3.63,11,4.25,11h2.83L7.39,9z M8.31,17H3.17c-0.49,0-0.91,0.36-0.99,0.85l0,0C2.08,18.45,2.55,19,3.17,19H8L8.31,17z M8.93,13H3.79c-0.49,0-0.91,0.36-0.99,0.85 l0,0C2.7,14.45,3.17,15,3.79,15h4.84L8.93,13z"/></g></svg>`}
    />
  )
})
