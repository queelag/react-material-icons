import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSmartToy } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSmartToy />
 * }
 * ```
 *
 * @category Component
 */
export function IconSmartToy(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M7.5,11.5C7.5,10.67,8.17,10,9,10 s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M15,17H9c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v0 C16,16.55,15.55,17,15,17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10s1.5,0.67,1.5,1.5S15.83,13,15,13z"/></g></svg>`}
    />
  )
}
