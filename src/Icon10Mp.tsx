import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { Icon10Mp } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <Icon10Mp />
 * }
 * ```
 *
 * @category Component
 */
export function Icon10Mp(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13.5,7H15v3h-1.5V7z M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11.75,18.5 L11.75,18.5c-0.41,0-0.75-0.34-0.75-0.75V14h-1v2.25C10,16.66,9.66,17,9.25,17h0c-0.41,0-0.75-0.34-0.75-0.75V14h-1v3.75 c0,0.41-0.34,0.75-0.75,0.75h0C6.34,18.5,6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v4.25 C12.5,18.16,12.16,18.5,11.75,18.5z M14.25,18.5L14.25,18.5c-0.41,0-0.75-0.34-0.75-0.75V13.5c0-0.55,0.45-1,1-1H17 c0.55,0,1,0.45,1,1V16c0,0.55-0.45,1-1,1h-2v0.75C15,18.16,14.66,18.5,14.25,18.5z M10,6.5v4.25c0,0.41-0.34,0.75-0.75,0.75h0 c-0.41,0-0.75-0.34-0.75-0.75V7H7.75C7.34,7,7,6.66,7,6.25v0C7,5.84,7.34,5.5,7.75,5.5H9C9.55,5.5,10,5.95,10,6.5z M16.5,10.5 c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h2.5c0.55,0,1,0.45,1,1V10.5z M15,14h1.5v1.5H15V14z"/></g></g></svg>`}
    />
  )
}
