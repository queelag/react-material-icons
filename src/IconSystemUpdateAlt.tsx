import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSystemUpdateAlt } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSystemUpdateAlt />
 * }
 * ```
 *
 * @category Component
 */
export function IconSystemUpdateAlt(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12.35 15.65l2.79-2.79c.31-.31.09-.85-.35-.85H13V4c0-.55-.45-1-1-1s-1 .45-1 1v8H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.2.51.2.7.01zM21 3h-5.01c-.54 0-.99.45-.99.99 0 .55.45.99.99.99H20c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h4.01c.54 0 .99-.45.99-.99 0-.55-.45-1-.99-1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`}
    />
  )
}
