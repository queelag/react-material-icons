import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNextWeek } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNextWeek />
 * }
 * ```
 *
 * @category Component
 */
export function IconNextWeek(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm.5 13c-.28-.28-.28-.72 0-1l2.5-2.5-2.5-2.5c-.28-.28-.28-.72 0-1s.72-.28 1 0l3.15 3.15c.2.2.2.51 0 .71L11.5 18c-.28.28-.72.28-1 0z"/></svg>`}
    />
  )
}
