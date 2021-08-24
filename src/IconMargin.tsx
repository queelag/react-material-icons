import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconMargin } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconMargin />
 * }
 * ```
 *
 * @category Component
 */
export function IconMargin(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M9,8c0,0.55-0.45,1-1,1S7,8.55,7,8 s0.45-1,1-1S9,7.45,9,8z M13,8c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S13,7.45,13,8z M17,8c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1s0.45-1,1-1C16.55,7,17,7.45,17,8z M17,12c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1s0.45-1,1-1 C16.55,11,17,11.45,17,12z M13,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S13,11.45,13,12z M9,12c0,0.55-0.45,1-1,1s-1-0.45-1-1 s0.45-1,1-1S9,11.45,9,12z"/></g></svg>`}
    />
  )
}
