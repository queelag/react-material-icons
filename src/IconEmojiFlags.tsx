import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconEmojiFlags } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconEmojiFlags />
 * }
 * ```
 *
 * @category Component
 */
export const IconEmojiFlags = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M19,9h-5l-0.72-1.45C13.11,7.21,12.76,7,12.38,7H7V5.72C7.6,5.38,8,4.74,8,4c0-1.1-0.9-2-2-2S4,2.9,4,4 c0,0.74,0.4,1.38,1,1.72V20c0,0.55,0.45,1,1,1s1-0.45,1-1v-3h5l0.72,1.45c0.17,0.34,0.52,0.55,0.89,0.55H19c0.55,0,1-0.45,1-1v-8 C20,9.45,19.55,9,19,9z M18,17h-4l-1-2H7V9h5l1,2h5V17z"/></g></svg>`}
    />
  )
})
