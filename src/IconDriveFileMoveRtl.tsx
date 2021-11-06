import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconDriveFileMoveRtl } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconDriveFileMoveRtl />
 * }
 * ```
 *
 * @category Component
 */
export const IconDriveFileMoveRtl = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M20,6h-8l-1.41-1.41C10.21,4.21,9.7,4,9.17,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M11.15,16.15l-2.79-2.79c-0.2-0.2-0.2-0.51,0-0.71l2.79-2.79C11.46,9.54,12,9.76,12,10.21V12h3 c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1h-3v1.79C12,16.24,11.46,16.46,11.15,16.15z"/></svg>`}
    />
  )
})
