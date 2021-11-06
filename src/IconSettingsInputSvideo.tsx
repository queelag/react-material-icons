import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSettingsInputSvideo } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSettingsInputSvideo />
 * }
 * ```
 *
 * @category Component
 */
export const IconSettingsInputSvideo = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8 S16.42,20,12,20z"/><circle cx="7.5" cy="11.5" r="1.5"/><circle cx="16.5" cy="11.5" r="1.5"/><circle cx="9" cy="16" r="1.5"/><circle cx="15" cy="16" r="1.5"/><path d="M15,7.5C15,6.67,14.33,6,13.5,6h-3C9.67,6,9,6.67,9,7.5S9.67,9,10.5,9h3C14.33,9,15,8.33,15,7.5z"/></g></g></svg>`}
    />
  )
})
