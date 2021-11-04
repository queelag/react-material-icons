import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRememberMe } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRememberMe />
 * }
 * ```
 *
 * @category Component
 */
export function IconRememberMe(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,15.21 C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z"/><circle cx="12" cy="10" r="3"/></g></g></svg>`}
    />
  )
}
