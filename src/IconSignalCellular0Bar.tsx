import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSignalCellular0Bar } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSignalCellular0Bar />
 * }
 * ```
 *
 * @category Component
 */
export function IconSignalCellular0Bar(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M4.41,22H21c0.55,0,1-0.45,1-1V4.41c0-0.89-1.08-1.34-1.71-0.71L3.71,20.29C3.08,20.92,3.52,22,4.41,22z M20,20H6.83 L20,6.83V20z"/></g></svg>`}
    />
  )
}
