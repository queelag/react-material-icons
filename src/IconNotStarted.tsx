import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNotStarted } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNotStarted />
 * }
 * ```
 *
 * @category Component
 */
export function IconNotStarted(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,15c0,0.55-0.45,1-1,1s-1-0.45-1-1 V9c0-0.55,0.45-1,1-1s1,0.45,1,1V15z M16.02,12.78l-2.4,1.92C12.97,15.22,12,14.76,12,13.92v-3.84c0-0.84,0.97-1.3,1.62-0.78 l2.4,1.92C16.52,11.62,16.52,12.38,16.02,12.78z"/><polygon fill="none" points="24,24 0,23.97 0,0 24,0.03"/></g></svg>`}
    />
  )
}
