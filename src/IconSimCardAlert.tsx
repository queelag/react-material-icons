import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSimCardAlert } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSimCardAlert />
 * }
 * ```
 *
 * @category Component
 */
export const IconSimCardAlert = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M18,2h-7.17C10.3,2,9.79,2.21,9.41,2.59L4.6,7.42C4.23,7.79,4.02,8.3,4.02,8.82L4,20c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2 V4C20,2.9,19.1,2,18,2z M12,17L12,17c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C13,16.55,12.55,17,12,17z M12,13L12,13c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1l0,0c0.55,0,1,0.45,1,1v3C13,12.55,12.55,13,12,13z"/></g></g></g></svg>`}
    />
  )
})
