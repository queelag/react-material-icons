import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { Icon5K } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <Icon5K />
 * }
 * ```
 *
 * @category Component
 */
export function Icon5K(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10.25,10.5H8v1h2 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H7.25c-0.41,0-0.75-0.34-0.75-0.75v0c0-0.41,0.34-0.75,0.75-0.75H9.5v-1H7.25 c-0.41,0-0.75-0.34-0.75-0.75v-2C6.5,9.34,6.84,9,7.25,9h3C10.66,9,11,9.34,11,9.75v0C11,10.16,10.66,10.5,10.25,10.5z M16.59,15 L16.59,15c-0.22,0-0.42-0.1-0.55-0.27l-1.54-1.98v1.55c0,0.39-0.31,0.7-0.7,0.7H13.7c-0.39,0-0.7-0.31-0.7-0.7V9.7 C13,9.31,13.31,9,13.7,9h0.09c0.39,0,0.7,0.31,0.7,0.7v1.55l1.54-1.98C16.17,9.1,16.38,9,16.59,9l0,0c0.58,0,0.91,0.66,0.56,1.12 L15.75,12l1.41,1.88C17.5,14.34,17.17,15,16.59,15z"/></g></svg>`}
    />
  )
}
