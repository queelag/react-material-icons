import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconExpand } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconExpand />
 * }
 * ```
 *
 * @category Component
 */
export function IconExpand(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M5,20h14c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1v0C4,20.45,4.45,20,5,20z M5,2h14c0.55,0,1,0.45,1,1 v0c0,0.55-0.45,1-1,1H5C4.45,4,4,3.55,4,3v0C4,2.45,4.45,2,5,2z M13,9h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79 c-0.2-0.2-0.51-0.2-0.71,0L8.85,8.15C8.54,8.46,8.76,9,9.21,9H11v6H9.21c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.79 c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79c0.31-0.31,0.09-0.85-0.35-0.85H13V9z"/></g></svg>`}
    />
  )
}
