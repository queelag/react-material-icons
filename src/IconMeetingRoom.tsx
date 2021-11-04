import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconMeetingRoom } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconMeetingRoom />
 * }
 * ```
 *
 * @category Component
 */
export function IconMeetingRoom(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><g><path d="M0,0h24v24H0V0z" fill="none"/></g></g><g><g><g><path d="M20,19h-1V5c0-0.55-0.45-1-1-1h-4c0-0.55-0.45-1-1-1H6C5.45,3,5,3.45,5,4v15H4c-0.55,0-1,0.45-1,1s0.45,1,1,1h9 c0.55,0,1-0.45,1-1V6h3v14c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1S20.55,19,20,19z M11,13L11,13c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C12,12.55,11.55,13,11,13z"/></g></g></g></svg>`}
    />
  )
}
