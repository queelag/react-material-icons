import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconHd } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconHd />
 * }
 * ```
 *
 * @category Component
 */
export function IconHd(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.75 12c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75zm3.25-6H17c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zm1 4.5h2v-3h-2v3z"/></svg>`}
    />
  )
}
