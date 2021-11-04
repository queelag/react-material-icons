import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconManageSearch } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconManageSearch />
 * }
 * ```
 *
 * @category Component
 */
export function IconManageSearch(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M6,9H3C2.45,9,2,8.55,2,8v0c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0C7,8.55,6.55,9,6,9z M6,12H3c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v0C7,12.45,6.55,12,6,12z M19.88,18.29l-3.12-3.12c-0.86,0.56-1.89,0.88-3,0.82 c-2.37-0.11-4.4-1.96-4.72-4.31C8.6,8.33,11.49,5.5,14.87,6.07c1.95,0.33,3.57,1.85,4,3.78c0.33,1.46,0.01,2.82-0.7,3.9l3.13,3.13 c0.39,0.39,0.39,1.02,0,1.41l0,0C20.91,18.68,20.27,18.68,19.88,18.29z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3 S17,12.65,17,11z M3,19h8c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3c-0.55,0-1,0.45-1,1v0C2,18.55,2.45,19,3,19z"/></g></svg>`}
    />
  )
}
