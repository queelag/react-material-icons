import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconApartment } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconApartment />
 * }
 * ```
 *
 * @category Component
 */
export const IconApartment = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M17,11V5c0-1.1-0.9-2-2-2H9C7.9,3,7,3.9,7,5v2H5C3.9,7,3,7.9,3,9v10c0,1.1,0.9,2,2,2h5c0.55,0,1-0.45,1-1v-3h2v3 c0,0.55,0.45,1,1,1h5c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15 z M11,11H9V9h2V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"/></g></svg>`}
    />
  )
})
