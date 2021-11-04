import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAutoAwesome } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAutoAwesome />
 * }
 * ```
 *
 * @category Component
 */
export function IconAutoAwesome(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M19.46,8l0.79-1.75L22,5.46c0.39-0.18,0.39-0.73,0-0.91l-1.75-0.79L19.46,2c-0.18-0.39-0.73-0.39-0.91,0l-0.79,1.75 L16,4.54c-0.39,0.18-0.39,0.73,0,0.91l1.75,0.79L18.54,8C18.72,8.39,19.28,8.39,19.46,8z M11.5,9.5L9.91,6 C9.56,5.22,8.44,5.22,8.09,6L6.5,9.5L3,11.09c-0.78,0.36-0.78,1.47,0,1.82l3.5,1.59L8.09,18c0.36,0.78,1.47,0.78,1.82,0l1.59-3.5 l3.5-1.59c0.78-0.36,0.78-1.47,0-1.82L11.5,9.5z M18.54,16l-0.79,1.75L16,18.54c-0.39,0.18-0.39,0.73,0,0.91l1.75,0.79L18.54,22 c0.18,0.39,0.73,0.39,0.91,0l0.79-1.75L22,19.46c0.39-0.18,0.39-0.73,0-0.91l-1.75-0.79L19.46,16 C19.28,15.61,18.72,15.61,18.54,16z"/></g></g></svg>`}
    />
  )
}
