import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconVideoLabel } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconVideoLabel />
 * }
 * ```
 *
 * @category Component
 */
export function IconVideoLabel(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10z"/></svg>`}
    />
  )
}
