import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPersonSearch } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPersonSearch />
 * }
 * ```
 *
 * @category Component
 */
export function IconPersonSearch(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><circle cx="10" cy="8" r="4"/><path d="M10.35,14.01C7.62,13.91,2,15.27,2,18v1c0,0.55,0.45,1,1,1h8.54C9.07,17.24,10.31,14.11,10.35,14.01z"/><path d="M19.43,18.02c0.47-0.8,0.7-1.77,0.48-2.82c-0.34-1.64-1.72-2.95-3.38-3.16c-2.63-0.34-4.85,1.87-4.5,4.5 c0.22,1.66,1.52,3.04,3.16,3.38c1.05,0.22,2.02-0.01,2.82-0.48l1.86,1.86c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C18,17.1,17.1,18,16,18z"/></g></g></svg>`}
    />
  )
}
