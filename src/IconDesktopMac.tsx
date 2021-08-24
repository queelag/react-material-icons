import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconDesktopMac } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconDesktopMac />
 * }
 * ```
 *
 * @category Component
 */
export function IconDesktopMac(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-1.63 2.45c-.44.66.03 1.55.83 1.55h5.6c.8 0 1.28-.89.83-1.55L14 18h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v9z"/></svg>`}
    />
  )
}
