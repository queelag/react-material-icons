import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRecommend } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRecommend />
 * }
 * ```
 *
 * @category Component
 */
export function IconRecommend(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M18,11.8c0.02,0.17-0.02,0.35-0.1,0.5l-2.1,4.9 c-0.22,0.51-0.74,0.83-1.3,0.8H9c-1.1,0-2-0.9-2-2v-5c-0.02-0.38,0.13-0.74,0.4-1L12,5l0.69,0.69c0.18,0.19,0.29,0.44,0.3,0.7v0.2 L12.41,10H17c0.55,0,1,0.45,1,1V11.8z"/></g></g></svg>`}
    />
  )
}
