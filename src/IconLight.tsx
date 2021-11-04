import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconLight } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconLight />
 * }
 * ```
 *
 * @category Component
 */
export function IconLight(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M13,6.06V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2.06c-4.5,0.5-8,4.31-8,8.93C3,16.1,3.9,17,5.01,17L8,17 c0,2.21,1.79,4,4,4s4-1.79,4-4l2.99,0C20.1,17,21,16.1,21,14.99C21,10.37,17.5,6.56,13,6.06z M12,15l-7,0c0-3.86,3.14-7,7-7 s7,3.14,7,7L12,15z"/></g></svg>`}
    />
  )
}
