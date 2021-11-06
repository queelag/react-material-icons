import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCalendarViewWeek } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCalendarViewWeek />
 * }
 * ```
 *
 * @category Component
 */
export const IconCalendarViewWeek = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M13,6h2.5v12H13V6z M11,18H8.5V6H11 V18z M4,6h2.5v12H4V6z M20,18h-2.5V6H20V18z"/></g></svg>`}
    />
  )
})
