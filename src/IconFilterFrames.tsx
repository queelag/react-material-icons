import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconFilterFrames } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconFilterFrames />
 * }
 * ```
 *
 * @category Component
 */
export function IconFilterFrames(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4h-4L12.71.71c-.39-.39-1.02-.39-1.41 0L8 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 16H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.52l3.52-3.5L15.52 6H19c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM17 8H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"/></svg>`}
    />
  )
}
