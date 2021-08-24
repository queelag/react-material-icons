import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSignalCellularNoSim } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSignalCellularNoSim />
 * }
 * ```
 *
 * @category Component
 */
export function IconSignalCellularNoSim(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5c0-1.1-.9-2-2-2h-6.17c-.53 0-1.04.21-1.42.59L7.95 5.06 19 16.11V5zM3.09 4.44c-.39.39-.39 1.02 0 1.41L5 7.78V19c0 1.11.9 2 2 2h11.23l.91.91c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.5 4.44c-.39-.39-1.02-.39-1.41 0z"/></svg>`}
    />
  )
}
