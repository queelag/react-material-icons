import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSignalCellularNull } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSignalCellularNull />
 * }
 * ```
 *
 * @category Component
 */
export function IconSignalCellularNull(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6.83V19c0 .55-.45 1-1 1H6.83L20 6.83m.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7z"/></svg>`}
    />
  )
}
