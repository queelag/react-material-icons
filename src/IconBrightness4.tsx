import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconBrightness4 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconBrightness4 />
 * }
 * ```
 *
 * @category Component
 */
export const IconBrightness4 = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M22.6,11.29L20,8.69V5c0-0.55-0.45-1-1-1h-3.69l-2.6-2.6c-0.39-0.39-1.02-0.39-1.41,0L8.69,4H5C4.45,4,4,4.45,4,5v3.69 l-2.6,2.6c-0.39,0.39-0.39,1.02,0,1.41L4,15.3V19c0,0.55,0.45,1,1,1h3.69l2.6,2.6c0.39,0.39,1.02,0.39,1.41,0l2.6-2.6H19 c0.55,0,1-0.45,1-1v-3.69l2.6-2.6C22.99,12.32,22.99,11.68,22.6,11.29z M17.92,12.98c-0.34,2.12-1.85,3.94-3.88,4.66 c-1.21,0.43-2.41,0.45-3.5,0.18c-0.41-0.1-0.48-0.65-0.13-0.9C11.98,15.84,13,14.04,13,12s-1.02-3.84-2.58-4.92 c-0.35-0.24-0.29-0.79,0.13-0.9c1.09-0.27,2.29-0.25,3.5,0.18c2.02,0.72,3.54,2.54,3.88,4.66C17.98,11.35,18,11.68,18,12 C17.99,12.32,17.97,12.65,17.92,12.98z"/></g></g></g></svg>`}
    />
  )
})
