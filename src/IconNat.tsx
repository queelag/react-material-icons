import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconNat } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconNat />
 * }
 * ```
 *
 * @category Component
 */
export const IconNat = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.82,13H11v-2H6.82C6.4,9.84,5.3,9,4,9c-1.66,0-3,1.34-3,3s1.34,3,3,3C5.3,15,6.4,14.16,6.82,13z M4,13 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C5,12.55,4.55,13,4,13z"/><path d="M22.47,12.4c0.27-0.2,0.27-0.6,0-0.8L19,9v2h-4.05c-0.47-4.69-4.16-8.42-8.83-8.94C5.52,2,5,2.46,5,3.06v0 c0,0.5,0.37,0.93,0.87,0.99C9.88,4.48,13,7.87,13,12s-3.12,7.52-7.13,7.95C5.37,20.01,5,20.44,5,20.94v0c0,0.6,0.52,1.07,1.11,1 c4.67-0.52,8.37-4.25,8.83-8.94H19v2L22.47,12.4z"/></g></g></svg>`}
    />
  )
})
