import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSwapHorizontalCircle } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSwapHorizontalCircle />
 * }
 * ```
 *
 * @category Component
 */
export const IconSwapHorizontalCircle = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4V6.5zm-6 11l-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9v2.5z"/></svg>`}
    />
  )
})
