import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPublish } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPublish />
 * }
 * ```
 *
 * @category Component
 */
export function IconPublish(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7c-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71z"/></svg>`}
    />
  )
}
