import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRestore } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRestore />
 * }
 * ```
 *
 * @category Component
 */
export const IconRestore = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.25 3c-5.09-.14-9.26 3.94-9.26 9H2.2c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.32-.31.09-.85-.35-.85h-1.8c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.43-.39 1.13.08 1.5 1.52 1.19 3.44 1.9 5.52 1.9 5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.33-.74-.75-.74z"/></svg>`}
    />
  )
})
