import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconHideImage } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconHideImage />
 * }
 * ```
 *
 * @category Component
 */
export const IconHideImage = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,3H5.83L21,18.17V5C21,3.9,20.1,3,19,3z"/><path d="M3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3,5.83V19c0,1.1,0.9,2,2,2h13.17l0.9,0.9 c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51z M7,17c-0.41,0-0.65-0.47-0.4-0.8l2-2.67 c0.2-0.27,0.6-0.27,0.8,0L11.25,16l0.82-1.1l2.1,2.1H7z"/></g></g></svg>`}
    />
  )
})
