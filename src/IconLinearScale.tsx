import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconLinearScale } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconLinearScale />
 * }
 * ```
 *
 * @category Component
 */
export const IconLinearScale = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M17,7c-2.41,0-4.43,1.72-4.9,4H6.79C6.4,10.12,5.52,9.5,4.5,9.5C3.12,9.5,2,10.62,2,12s1.12,2.5,2.5,2.5 c1.02,0,1.9-0.62,2.29-1.5h5.31c0.46,2.28,2.48,4,4.9,4c2.76,0,5-2.24,5-5S19.76,7,17,7z M17,15c-1.65,0-3-1.35-3-3s1.35-3,3-3 s3,1.35,3,3S18.65,15,17,15z"/></svg>`}
    />
  )
})
