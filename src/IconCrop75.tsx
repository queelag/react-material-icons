import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCrop75 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCrop75 />
 * }
 * ```
 *
 * @category Component
 */
export function IconCrop75(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-1 8H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z"/></svg>`}
    />
  )
}
