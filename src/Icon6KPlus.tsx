import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { Icon6KPlus } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <Icon6KPlus />
 * }
 * ```
 *
 * @category Component
 */
export const Icon6KPlus = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M7.5,12.5h1V14h-1V12.5z M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9.25,10.5 H7.5v1H9c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h2.25C9.66,9,10,9.34,10,9.75v0 C10,10.16,9.66,10.5,9.25,10.5z M14.59,15L14.59,15c-0.22,0-0.42-0.1-0.55-0.27l-1.54-1.98v1.55c0,0.39-0.31,0.7-0.7,0.7H11.7 c-0.39,0-0.7-0.31-0.7-0.7V9.7C11,9.31,11.31,9,11.7,9h0.09c0.39,0,0.7,0.31,0.7,0.7v1.55l1.54-1.98C14.17,9.1,14.38,9,14.59,9h0 c0.58,0,0.91,0.66,0.56,1.12L13.75,12l1.41,1.88C15.5,14.34,15.17,15,14.59,15z M18.5,12.5h-1v1c0,0.28-0.22,0.5-0.5,0.5l0,0 c-0.28,0-0.5-0.22-0.5-0.5v-1h-1c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5h1v-1c0-0.28,0.22-0.5,0.5-0.5l0,0 c0.28,0,0.5,0.22,0.5,0.5v1h1c0.28,0,0.5,0.22,0.5,0.5v0C19,12.28,18.78,12.5,18.5,12.5z"/></g></svg>`}
    />
  )
})
