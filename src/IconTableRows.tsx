import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconTableRows } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconTableRows />
 * }
 * ```
 *
 * @category Component
 */
export const IconTableRows = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M19,8H5C3.9,8,3,7.1,3,6v0c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v0C21,7.1,20.1,8,19,8z M19,10H5c-1.1,0-2,0.9-2,2v0 c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0C21,10.9,20.1,10,19,10z M19,16H5c-1.1,0-2,0.9-2,2v0c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0 C21,16.9,20.1,16,19,16z"/></svg>`}
    />
  )
})
