import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconBookmarkRemove } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconBookmarkRemove />
 * }
 * ```
 *
 * @category Component
 */
export function IconBookmarkRemove(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M21,6c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1s0.45-1,1-1h4C20.55,5,21,5.45,21,6z M19,10.9c-0.32,0.07-0.66,0.1-1,0.1 c-2.76,0-5-2.24-5-5c0-1.13,0.37-2.16,1-3L7,3C5.9,3,5,3.9,5,5v14.48c0,0.72,0.73,1.2,1.39,0.92L12,18l5.61,2.4 c0.66,0.28,1.39-0.2,1.39-0.92V10.9z"/></svg>`}
    />
  )
}
