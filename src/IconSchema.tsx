import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSchema } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSchema />
 * }
 * ```
 *
 * @category Component
 */
export const IconSchema = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M14,10.5V11h-3v-0.5C11,9.67,10.33,9,9.5,9h-1V7h1C10.33,7,11,6.33,11,5.5v-3C11,1.67,10.33,1,9.5,1h-4C4.67,1,4,1.67,4,2.5 v3C4,6.33,4.67,7,5.5,7h1v2h-1C4.67,9,4,9.67,4,10.5v3C4,14.33,4.67,15,5.5,15h1v2h-1C4.67,17,4,17.67,4,18.5v3 C4,22.33,4.67,23,5.5,23h4c0.83,0,1.5-0.67,1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-1v-2h1c0.83,0,1.5-0.67,1.5-1.5V13h3v0.5 c0,0.83,0.67,1.5,1.5,1.5h4c0.83,0,1.5-0.67,1.5-1.5v-3C21,9.67,20.33,9,19.5,9h-4C14.67,9,14,9.67,14,10.5z"/></svg>`}
    />
  )
})
