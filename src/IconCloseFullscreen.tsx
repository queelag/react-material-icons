import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCloseFullscreen } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCloseFullscreen />
 * }
 * ```
 *
 * @category Component
 */
export const IconCloseFullscreen = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M21.29,4.12l-4.59,4.59l1.59,1.59c0.63,0.63,0.18,1.71-0.71,1.71H13c-0.55,0-1-0.45-1-1V6.41c0-0.89,1.08-1.34,1.71-0.71 l1.59,1.59l4.59-4.59c0.39-0.39,1.02-0.39,1.41,0v0C21.68,3.1,21.68,3.73,21.29,4.12z M4.12,21.29l4.59-4.59l1.59,1.59 c0.63,0.63,1.71,0.18,1.71-0.71V13c0-0.55-0.45-1-1-1H6.41c-0.89,0-1.34,1.08-0.71,1.71l1.59,1.59l-4.59,4.59 c-0.39,0.39-0.39,1.02,0,1.41l0,0C3.1,21.68,3.73,21.68,4.12,21.29z"/></svg>`}
    />
  )
})
