import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconPrivateConnectivity } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconPrivateConnectivity />
 * }
 * ```
 *
 * @category Component
 */
export const IconPrivateConnectivity = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M22,12c0-0.55-0.45-1-1-1h-2.07c-0.49-3.39-3.4-6-6.93-6s-6.44,2.61-6.93,6H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h2.07 c0.49,3.39,3.4,6,6.93,6s6.44-2.61,6.93-6H21C21.55,13,22,12.55,22,12z M15,14.5c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1v-1c0-1.21,1.08-2.18,2.34-1.97C13.32,7.69,14,8.61,14,9.61v0.89c0.55,0,1,0.45,1,1V14.5z M12.75,13 c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75S12.75,12.59,12.75,13z M13,9.5v1h-2v-1 c0-0.55,0.45-1,1-1S13,8.95,13,9.5z"/></svg>`}
    />
  )
})
