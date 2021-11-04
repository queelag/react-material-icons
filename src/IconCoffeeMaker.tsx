import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCoffeeMaker } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCoffeeMaker />
 * }
 * ```
 *
 * @category Component
 */
export function IconCoffeeMaker(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M18,6V4h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h13c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h-3.03C17.2,19.09,18,17.64,18,16v-3c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v3c0,1.64,0.81,3.09,2.03,4H6V4h2v2 c0,0.55,0.45,1,1,1h8C17.55,7,18,6.55,18,6z"/><circle cx="13" cy="9" r="1"/></g></g></svg>`}
    />
  )
}
