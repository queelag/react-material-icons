import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconFitnessCenter } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconFitnessCenter />
 * }
 * ```
 *
 * @category Component
 */
export const IconFitnessCenter = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.57 14.86l.72-.72c.39-.39.39-1.02 0-1.41l-.02-.02c-.39-.39-1.02-.39-1.41 0L17 15.57 8.43 7l2.86-2.86c.39-.39.39-1.02 0-1.41l-.02-.02c-.39-.39-1.02-.39-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72c-.39-.39-1.04-.39-1.43 0-.39.39-.39 1.04 0 1.43l.72.72L2.71 7c-.39.39-.39 1.02 0 1.41l.72.72-.72.73c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43 15.57 17l-2.86 2.86c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72L21.29 17c.39-.39.39-1.02 0-1.41l-.72-.73z"/></svg>`}
    />
  )
})
