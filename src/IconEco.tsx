import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconEco } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconEco />
 * }
 * ```
 *
 * @category Component
 */
export function IconEco(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.05,8.05c-2.73,2.73-2.73,7.15-0.02,9.88c1.47-3.4,4.09-6.24,7.36-7.93c-2.77,2.34-4.71,5.61-5.39,9.32 c2.6,1.23,5.8,0.78,7.95-1.37c2.99-2.99,3.83-11.14,4.01-13.38c0.02-0.31-0.23-0.56-0.53-0.53C17.19,4.22,9.04,5.06,6.05,8.05z"/></g></g></svg>`}
    />
  )
}
