import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNoCell } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNoCell />
 * }
 * ```
 *
 * @category Component
 */
export const IconNoCell = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M8.83,6l-3.7-3.7C5.42,1.55,6.15,1,7,1l10,0.01c1.1,0,2,0.89,2,1.99v13.17l-2-2V6H8.83z M20.49,21.9 c-0.39,0.39-1.02,0.39-1.41,0l-0.2-0.2C18.58,22.45,17.85,23,17,23H7c-1.1,0-2-0.9-2-2V7.83l-2.9-2.9c-0.39-0.39-0.39-1.02,0-1.41 c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97C20.88,20.88,20.88,21.51,20.49,21.9z M15.17,18L7,9.83V18H15.17z"/></g></svg>`}
    />
  )
})
