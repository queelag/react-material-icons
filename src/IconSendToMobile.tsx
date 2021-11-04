import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSendToMobile } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSendToMobile />
 * }
 * ```
 *
 * @category Component
 */
export function IconSendToMobile(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17,18H7V6h10v0c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V3c0-1.1-0.9-2-2-2L7,1.01C5.9,1.01,5,1.9,5,3v18c0,1.1,0.9,2,2,2 h10c1.1,0,2-0.9,2-2v-3c0-0.55-0.45-1-1-1h0C17.45,17,17,17.45,17,18L17,18z"/><path d="M21.65,11.65l-2.79-2.79C18.54,8.54,18,8.76,18,9.21V11h-4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,12.16,21.84,11.84,21.65,11.65z"/></g></g></svg>`}
    />
  )
}
