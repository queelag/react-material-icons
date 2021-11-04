import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCircleNotifications } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCircleNotifications />
 * }
 * ```
 *
 * @category Component
 */
export function IconCircleNotifications(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.5c-0.83,0-1.5-0.67-1.5-1.5h3 C13.5,17.83,12.83,18.5,12,18.5z M16,16H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1l0-3c0-1.86,1.28-3.41,3-3.86V6.5 c0-0.55,0.45-1,1-1s1,0.45,1,1v0.64c1.72,0.45,3,2,3,3.86l0,3c0.55,0,1,0.45,1,1v0C17,15.55,16.55,16,16,16z"/></g></svg>`}
    />
  )
}
