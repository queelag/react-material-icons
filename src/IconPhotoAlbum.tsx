import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPhotoAlbum } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPhotoAlbum />
 * }
 * ```
 *
 * @category Component
 */
export const IconPhotoAlbum = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm.63 14.19l1.99-2.56c.2-.25.58-.26.78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82c.25.33.01.8-.4.8H7.02c-.41-.01-.65-.49-.39-.82z"/></svg>`}
    />
  )
})
