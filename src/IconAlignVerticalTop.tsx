import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAlignVerticalTop } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAlignVerticalTop />
 * }
 * ```
 *
 * @category Component
 */
export const IconAlignVerticalTop = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M22,3L22,3c0,0.55-0.45,1-1,1H3C2.45,4,2,3.55,2,3v0c0-0.55,0.45-1,1-1h18C21.55,2,22,2.45,22,3z M8.5,22L8.5,22 c0.83,0,1.5-0.67,1.5-1.5v-13C10,6.67,9.33,6,8.5,6h0C7.67,6,7,6.67,7,7.5v13C7,21.33,7.67,22,8.5,22z M15.5,16L15.5,16 c0.83,0,1.5-0.67,1.5-1.5v-7C17,6.67,16.33,6,15.5,6h0C14.67,6,14,6.67,14,7.5v7C14,15.33,14.67,16,15.5,16z"/></svg>`}
    />
  )
})
