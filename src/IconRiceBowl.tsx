import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRiceBowl } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRiceBowl />
 * }
 * ```
 *
 * @category Component
 */
export function IconRiceBowl(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M22,12L22,12c0-5.48-4.4-9.93-9.86-10C8.52,1.95,5.29,4.03,3.43,7.14C0.1,12.69,2.98,18.27,8,20.25v0.25 C8,21.33,8.67,22,9.5,22h5c0.83,0,1.5-0.67,1.5-1.5v-0.25C19.53,18.86,22,15.69,22,12z M20,12h-4V5.08C18.39,6.47,20,9.05,20,12z M14,4.26V12h-4V4.26C10.64,4.1,11.31,4,12,4S13.36,4.1,14,4.26z M4,12c0-2.95,1.61-5.53,4-6.92V12H4z"/></svg>`}
    />
  )
}
