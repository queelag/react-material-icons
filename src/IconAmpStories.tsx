import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAmpStories } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAmpStories />
 * }
 * ```
 *
 * @category Component
 */
export function IconAmpStories(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16,4H8C7.45,4,7,4.45,7,5v13c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z"/><path d="M4,6C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C5,6.45,4.55,6,4,6z"/><path d="M20,6c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C21,6.45,20.55,6,20,6z"/></g></g></svg>`}
    />
  )
}
