import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPhotoSizeSelectActual } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPhotoSizeSelectActual />
 * }
 * ```
 *
 * @category Component
 */
export function IconPhotoSizeSelectActual(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5.63 16.19l2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.41-.01-.65-.49-.39-.82z"/></svg>`}
    />
  )
}
