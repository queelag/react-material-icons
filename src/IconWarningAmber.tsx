import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconWarningAmber } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconWarningAmber />
 * }
 * ```
 *
 * @category Component
 */
export function IconWarningAmber(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 5.99L19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z"/></svg>`}
    />
  )
}
