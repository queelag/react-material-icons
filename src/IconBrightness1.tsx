import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconBrightness1 } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconBrightness1 />
 * }
 * ```
 *
 * @category Component
 */
export const IconBrightness1 = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><circle cx="12" cy="12" r="10"/></g></g></g></g></svg>`}
    />
  )
})
