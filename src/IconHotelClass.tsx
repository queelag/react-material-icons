import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconHotelClass } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconHotelClass />
 * }
 * ```
 *
 * @category Component
 */
export function IconHotelClass(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M8.58,10H2.56c-0.49,0-0.69,0.62-0.29,0.91l4.91,3.51l-1.89,6.1c-0.14,0.46,0.39,0.84,0.78,0.55L11,17.31l4.93,3.75 c0.39,0.29,0.92-0.08,0.78-0.55l-1.89-6.1l4.91-3.51c0.4-0.28,0.2-0.91-0.29-0.91h-6.02l-1.95-6.42c-0.14-0.47-0.81-0.47-0.96,0 L8.58,10z M20.9,20.51l-1.4-4.52l2.91-2.08c0.4-0.28,0.2-0.91-0.29-0.91h-1.88l-3.08,2.2l1.46,4.72l1.5,1.14 C20.51,21.35,21.04,20.97,20.9,20.51z M17,8l-1.34-4.42c-0.14-0.47-0.81-0.47-0.96,0l-0.57,1.87L14.91,8H17z"/></svg>`}
    />
  )
}
