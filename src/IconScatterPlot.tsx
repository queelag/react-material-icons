import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconScatterPlot } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconScatterPlot />
 * }
 * ```
 *
 * @category Component
 */
export const IconScatterPlot = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/><circle cx="16.6" cy="17.6" r="3"/></svg>`}
    />
  )
})
