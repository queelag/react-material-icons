import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSettingsBackupRestore } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSettingsBackupRestore />
 * }
 * ```
 *
 * @category Component
 */
export function IconSettingsBackupRestore(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11.77,3c-2.65,0.07-5,1.28-6.6,3.16L3.85,4.85C3.54,4.54,3,4.76,3,5.21V9.5C3,9.78,3.22,10,3.5,10h4.29 c0.45,0,0.67-0.54,0.35-0.85L6.59,7.59C7.88,6.02,9.82,5,12,5c4.32,0,7.74,3.94,6.86,8.41c-0.54,2.77-2.81,4.98-5.58,5.47 c-3.8,0.68-7.18-1.74-8.05-5.16C5.11,13.3,4.71,13,4.27,13h0c-0.65,0-1.14,0.61-0.98,1.23C4.28,18.12,7.8,21,12,21 c5.06,0,9.14-4.17,9-9.26C20.86,6.86,16.65,2.88,11.77,3z M14,12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,13.1,14,12z"/></g></svg>`}
    />
  )
}
