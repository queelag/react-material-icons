import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconTapAndPlay } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconTapAndPlay />
 * }
 * ```
 *
 * @category Component
 */
export const IconTapAndPlay = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.14 16.09c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14-.48-2.95-2.81-5.29-5.77-5.77zM2 20v3h3c0-1.66-1.34-3-3-3zm1.11-7.94c-.59-.06-1.11.4-1.11.99 0 .5.37.94.87.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.88.99.88.59 0 1.06-.51 1-1.1-.51-5.2-4.63-9.32-9.83-9.84zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/></svg>`}
    />
  )
})
