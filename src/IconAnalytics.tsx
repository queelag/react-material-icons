import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAnalytics } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAnalytics />
 * }
 * ```
 *
 * @category Component
 */
export function IconAnalytics(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8,17L8,17c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C9,16.55,8.55,17,8,17z M12,17L12,17c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1 C13,16.55,12.55,17,12,17z M12,12c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,12,12,12z M16,17L16,17c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v8C17,16.55,16.55,17,16,17z"/></g></svg>`}
    />
  )
}
