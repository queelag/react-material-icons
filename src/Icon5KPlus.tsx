import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { Icon5KPlus } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <Icon5KPlus />
 * }
 * ```
 *
 * @category Component
 */
export function Icon5KPlus(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9.25,10.5H7.5v1H9 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H6.75C6.34,15,6,14.66,6,14.25v0c0-0.41,0.34-0.75,0.75-0.75H8.5v-1H7c-0.55,0-1-0.45-1-1 V10c0-0.55,0.45-1,1-1h2.25C9.66,9,10,9.34,10,9.75v0C10,10.16,9.66,10.5,9.25,10.5z M14.59,15L14.59,15 c-0.22,0-0.42-0.1-0.55-0.27l-1.54-1.98v1.5c0,0.41-0.34,0.75-0.75,0.75h0C11.34,15,11,14.66,11,14.25v-4.5 C11,9.34,11.34,9,11.75,9h0c0.41,0,0.75,0.34,0.75,0.75v1.5l1.54-1.98C14.17,9.1,14.38,9,14.59,9h0c0.58,0,0.91,0.66,0.56,1.12 L13.75,12l1.41,1.88C15.5,14.34,15.17,15,14.59,15z M18.5,12.5h-1v1c0,0.28-0.22,0.5-0.5,0.5l0,0c-0.28,0-0.5-0.22-0.5-0.5v-1h-1 c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5h1v-1c0-0.28,0.22-0.5,0.5-0.5l0,0c0.28,0,0.5,0.22,0.5,0.5v1h1 c0.28,0,0.5,0.22,0.5,0.5v0C19,12.28,18.78,12.5,18.5,12.5z"/></g></svg>`}
    />
  )
}
