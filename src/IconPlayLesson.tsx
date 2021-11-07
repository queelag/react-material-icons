import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPlayLesson } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPlayLesson />
 * }
 * ```
 *
 * @category Component
 */
export const IconPlayLesson = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M18,11c0.34,0,0.67,0.03,1,0.08V4c0-1.1-0.9-2-2-2H5C3.9,2,3,2.9,3,4v16c0,1.1,0.9,2,2,2h7.26C11.47,20.87,11,19.49,11,18 C11,14.13,14.13,11,18,11z M7.76,10.55C7.42,10.75,7,10.51,7,10.12V4h5v6.12c0,0.39-0.42,0.63-0.76,0.43L9.5,9.5L7.76,10.55z"/><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M16.75,19.6v-3.2c0-0.39,0.43-0.63,0.76-0.42l2.56,1.6 c0.31,0.2,0.31,0.65,0,0.85l-2.56,1.6C17.18,20.23,16.75,19.99,16.75,19.6z"/></g></g></svg>`}
    />
  )
})
