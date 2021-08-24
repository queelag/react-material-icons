import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconWindow } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconWindow />
 * }
 * ```
 *
 * @category Component
 */
export function IconWindow(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,11h-7V4h7V11z M11,4v7H4V4H11z M4,13h7v7H4V13z M13,20v-7h7v7H13z"/></g></svg>`}
    />
  )
}
