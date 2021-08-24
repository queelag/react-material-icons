import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconBrandingWatermark } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconBrandingWatermark />
 * }
 * ```
 *
 * @category Component
 */
export function IconBrandingWatermark(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16h-7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z"/></svg>`}
    />
  )
}
