import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNoSim } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNoSim />
 * }
 * ```
 *
 * @category Component
 */
export const IconNoSim = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.09 4.44c-.39.39-.39 1.02 0 1.41l2.03 2.03-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.5 4.44c-.39-.39-1.02-.39-1.41 0zM19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06 19 16.11z"/></svg>`}
    />
  )
})
