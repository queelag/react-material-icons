import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconDetails } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconDetails />
 * }
 * ```
 *
 * @category Component
 */
export const IconDetails = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M11.13,4.57l-8.3,14.94C2.46,20.18,2.94,21,3.7,21h16.6c0.76,0,1.24-0.82,0.87-1.49l-8.3-14.94 C12.49,3.89,11.51,3.89,11.13,4.57z M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z"/><g><g><g/></g></g></svg>`}
    />
  )
})
