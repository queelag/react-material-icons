import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconEarbudsBattery } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconEarbudsBattery />
 * }
 * ```
 *
 * @category Component
 */
export const IconEarbudsBattery = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,7h-1l0,0V6.5C20,6.22,19.78,6,19.5,6l-1,0C18.22,6,18,6.22,18,6.5V7l0,0h-1c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1h4 c0.55,0,1-0.45,1-1V8C22,7.45,21.55,7,21,7z M14,9.38C14,7.51,12.49,6,10.62,6S7.25,7.51,7.25,9.38v5.25 c0,1.04-0.84,1.88-1.88,1.88S3.5,15.66,3.5,14.62v-4.7C3.66,9.97,3.83,10,4,10c1.1,0,2-0.9,2-2S5.1,6,4,6S2,6.9,2,8 c0,0.04,0,6.62,0,6.62C2,16.49,3.51,18,5.38,18s3.38-1.51,3.38-3.38V9.38c0-1.04,0.84-1.88,1.88-1.88s1.88,0.84,1.88,1.88v4.7 C12.34,14.03,12.17,14,12,14c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2C14,15.96,14,9.38,14,9.38z"/></g></g></svg>`}
    />
  )
})
