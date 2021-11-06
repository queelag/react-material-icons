import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconLooks3 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconLooks3 />
 * }
 * ```
 *
 * @category Component
 */
export const IconLooks3 = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5.01c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.99 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2H10c-.55 0-1-.45-1-1s.45-1 1-1h3.01L13 13h-1c-.55 0-1-.45-1-1s.45-1 1-1h1l.01-2H10c-.55 0-.99-.45-.99-1s.44-1 .99-1h3.01c1.1 0 2 .9 2 2v1.5z"/></svg>`}
    />
  )
})
