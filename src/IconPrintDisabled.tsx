import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPrintDisabled } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPrintDisabled />
 * }
 * ```
 *
 * @category Component
 */
export const IconPrintDisabled = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.12 2.32c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L4.98 8C3.33 8.01 2 9.35 2 11v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c.55 0 1.04-.22 1.4-.58l2.83 2.83c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 2.32zM15 19H9c-.55 0-1-.45-1-1v-4h2.98l4.72 4.72c-.19.17-.43.28-.7.28zm4-11h-8.37l9 9H20c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H7c-.37 0-.68.21-.85.51L9.63 7H17z"/></svg>`}
    />
  )
})
