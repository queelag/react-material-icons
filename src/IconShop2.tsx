import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconShop2 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconShop2 />
 * }
 * ```
 *
 * @category Component
 */
export function IconShop2(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M2,9L2,9c-0.55,0-1,0.45-1,1v10c0,1.1,0.9,2,2,2h15c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3V10C3,9.45,2.55,9,2,9z"/><path d="M18,5V3c0-1.11-0.89-2-2-2h-4c-1.11,0-2,0.89-2,2v2H5v11c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5H18z M12,3h4v2h-4V3z M12,14.09V8.91c0-0.39,0.44-0.63,0.77-0.42l4.07,2.59c0.31,0.2,0.31,0.65,0,0.84l-4.07,2.59C12.44,14.72,12,14.48,12,14.09z"/></g></g></svg>`}
    />
  )
}
