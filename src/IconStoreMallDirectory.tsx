import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconStoreMallDirectory } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconStoreMallDirectory />
 * }
 * ```
 *
 * @category Component
 */
export const IconStoreMallDirectory = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.16 7.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8L3 12v1c0 .55.45 1 1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5c.55 0 1-.45 1-1v-1l-.84-4.2zM12 18H6v-4h6v4zM5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`}
    />
  )
})
