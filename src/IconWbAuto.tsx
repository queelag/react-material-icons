import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconWbAuto } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconWbAuto />
 * }
 * ```
 *
 * @category Component
 */
export function IconWbAuto(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.85 12.65h2.3L8 9zM22.72 7c-.42 0-.77.3-.85.7l-1.07 5.59-1.31-5.51c-.11-.46-.52-.78-.99-.78s-.88.32-.98.78l-1.31 5.51-1.07-5.59c-.08-.4-.44-.7-.85-.7-.01 0-.03.01-.04.01C12.78 5.18 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.17 0 5.9-1.85 7.2-4.52.2.32.55.52.94.52.51 0 .95-.35 1.07-.84L18.5 9.9l1.29 5.26c.12.49.57.84 1.07.84.52 0 .96-.36 1.08-.86l1.61-7.08c.13-.54-.28-1.06-.83-1.06zm-11.79 9c-.38 0-.72-.24-.84-.6L9.6 14H6.4l-.49 1.4c-.13.36-.46.6-.84.6-.62 0-1.05-.61-.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7s1.13.38 1.34.94l2.44 6.86c.2.59-.23 1.2-.85 1.2z"/></svg>`}
    />
  )
}
