import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPinDrop } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPinDrop />
 * }
 * ```
 *
 * @category Component
 */
export function IconPinDrop(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,20h12c0.55,0,1,0.45,1,1s-0.45,1-1,1H6c-0.55,0-1-0.45-1-1S5.45,20,6,20z M12,7c-1.1,0-2,0.9-2,2s0.9,2,2,2 c1.1,0,2-0.9,2-2S13.1,7,12,7z M12,2c3.27,0,7,2.46,7,7.15c0,2.98-2.13,6.12-6.39,9.39c-0.36,0.28-0.86,0.28-1.22,0 C7.13,15.26,5,12.13,5,9.15C5,4.46,8.73,2,12,2z"/></g></g></svg>`}
    />
  )
}
