import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconTour } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconTour />
 * }
 * ```
 *
 * @category Component
 */
export function IconTour(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M20.45,5.37C20.71,4.71,20.23,4,19.52,4H13h-1H7V3c0-0.55-0.45-1-1-1h0C5.45,2,5,2.45,5,3v1v10v8h2v-8h4h1h7.52 c0.71,0,1.19-0.71,0.93-1.37L19,9L20.45,5.37z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z"/></g></svg>`}
    />
  )
}
