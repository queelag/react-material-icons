import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconImagesearchRoller } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconImagesearchRoller />
 * }
 * ```
 *
 * @category Component
 */
export function IconImagesearchRoller(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3v4c0,0.55-0.45,1-1,1H7C6.45,8,6,7.55,6,7V6H4v4h8c1.1,0,2,0.9,2,2v3h1c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1h-4 c-0.55,0-1-0.45-1-1v-6c0-0.55,0.45-1,1-1h1v-3H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h2V3c0-0.55,0.45-1,1-1h12 C19.55,2,20,2.45,20,3z"/></g></g></svg>`}
    />
  )
}
