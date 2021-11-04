import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconChatBubbleOutline } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconChatBubbleOutline />
 * }
 * ```
 *
 * @category Component
 */
export function IconChatBubbleOutline(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g enable-background="new"><path d="M20,4v12H5.17L4,17.17V4H20 M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2L20,2z"/></g></g></svg>`}
    />
  )
}
