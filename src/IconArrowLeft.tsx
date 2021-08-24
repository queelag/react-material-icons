import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconArrowLeft } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconArrowLeft />
 * }
 * ```
 *
 * @category Component
 */
export function IconArrowLeft(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/></svg>`}
    />
  )
}
