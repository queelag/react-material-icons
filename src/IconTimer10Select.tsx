import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconTimer10Select } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconTimer10Select />
 * }
 * ```
 *
 * @category Component
 */
export function IconTimer10Select(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M13,8v8h-3V8H13 M13,5h-3C8.34,5,7,6.34,7,8v8c0,1.66,1.34,3,3,3h3c1.66,0,3-1.34,3-3V8C16,6.34,14.66,5,13,5z M2.5,8H3v9.5 C3,18.33,3.67,19,4.5,19h0C5.33,19,6,18.33,6,17.5V7c0-1.1-0.9-2-2-2H2.5C1.67,5,1,5.67,1,6.5v0C1,7.33,1.67,8,2.5,8z M18.5,11 c-0.83,0-1.5,0.68-1.5,1.5v2c0,0.82,0.67,1.5,1.5,1.5H21v1h-3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h3.5c0.83,0,1.5-0.67,1.5-1.5 v-2c0-0.83-0.67-1.5-1.5-1.5H19v-1h3c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H18.5z"/></svg>`}
    />
  )
}
