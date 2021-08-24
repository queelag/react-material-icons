import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconFlashlightOff } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconFlashlightOff />
 * }
 * ```
 *
 * @category Component
 */
export function IconFlashlightOff(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M18,5V4c0-1.1-0.9-2-2-2H8C7.14,2,6.42,2.54,6.13,3.3L7.83,5H18z"/><polygon points="16,11 18,8 18,7 9.83,7 16,13.17"/><path d="M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l5.9,5.9L8,20c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-1.17l3.07,3.07 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z"/></g></g></svg>`}
    />
  )
}
