import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSystemSecurityUpdateGood } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSystemSecurityUpdateGood />
 * }
 * ```
 *
 * @category Component
 */
export function IconSystemSecurityUpdateGood(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,18H7V6h10V18z M10.34,14.29c0.39,0.39,1.02,0.39,1.41,0l3.54-3.54c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0l-2.83,2.83 l-0.71-0.71c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L10.34,14.29z"/></g></svg>`}
    />
  )
}
