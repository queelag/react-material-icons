import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconControlPointDuplicate } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconControlPointDuplicate />
 * }
 * ```
 *
 * @category Component
 */
export function IconControlPointDuplicate(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 8c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V9c0-.55-.45-1-1-1zM2 12c0-2.58 1.4-4.83 3.48-6.04.32-.19.53-.51.53-.88 0-.77-.84-1.25-1.51-.86C1.82 5.78 0 8.68 0 12s1.82 6.22 4.5 7.78c.67.39 1.51-.09 1.51-.86 0-.37-.21-.69-.53-.88C3.4 16.83 2 14.58 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>`}
    />
  )
}
