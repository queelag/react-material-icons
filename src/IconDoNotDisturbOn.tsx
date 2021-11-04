import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconDoNotDisturbOn } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconDoNotDisturbOn />
 * }
 * ```
 *
 * @category Component
 */
export function IconDoNotDisturbOn(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16,13H8c-0.55,0-1-0.45-1-1l0,0c0-0.55,0.45-1,1-1 h8c0.55,0,1,0.45,1,1l0,0C17,12.55,16.55,13,16,13z"/></g></g></svg>`}
    />
  )
}
