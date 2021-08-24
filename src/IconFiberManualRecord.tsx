import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconFiberManualRecord } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconFiberManualRecord />
 * }
 * ```
 *
 * @category Component
 */
export function IconFiberManualRecord(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="8"/></svg>`}
    />
  )
}
