import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRunningWithErrors } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRunningWithErrors />
 * }
 * ```
 *
 * @category Component
 */
export function IconRunningWithErrors(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M21,18c-0.55,0-1-0.45-1-1v-6c0-0.55,0.45-1,1-1s1,0.45,1,1v6C22,17.55,21.55,18,21,18z M21,20c-0.55,0-1,0.45-1,1 s0.45,1,1,1s1-0.45,1-1S21.55,20,21,20z M18,17.29C16.53,18.95,14.39,20,12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8v9l7.55-7.55 C17.72,3.34,15.02,2,12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c2.25,0,4.33-0.74,6-2V17.29z"/></svg>`}
    />
  )
}
