import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAod } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAod />
 * }
 * ```
 *
 * @category Component
 */
export function IconAod(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,18H7V6h10V18z M8.75,10h6.5c0.41,0,0.75,0.34,0.75,0.75v0c0,0.41-0.34,0.75-0.75,0.75h-6.5C8.34,11.5,8,11.16,8,10.75v0 C8,10.34,8.34,10,8.75,10z M9.75,13h4.5c0.41,0,0.75,0.34,0.75,0.75v0c0,0.41-0.34,0.75-0.75,0.75h-4.5C9.34,14.5,9,14.16,9,13.75 v0C9,13.34,9.34,13,9.75,13z"/></g></g></svg>`}
    />
  )
}
