import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAutoAwesomeMotion } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAutoAwesomeMotion />
 * }
 * ```
 *
 * @category Component
 */
export const IconAutoAwesomeMotion = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M13,2H4C2.9,2,2,2.9,2,4v9c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V4h9c0.55,0,1-0.45,1-1v0C14,2.45,13.55,2,13,2z M17,6H8 C6.9,6,6,6.9,6,8v9c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V8h9c0.55,0,1-0.45,1-1v0C18,6.45,17.55,6,17,6z M20,10h-8 c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-8C22,10.9,21.1,10,20,10z"/></g></g></svg>`}
    />
  )
})
