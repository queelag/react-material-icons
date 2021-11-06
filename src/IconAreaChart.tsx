import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAreaChart } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAreaChart />
 * }
 * ```
 *
 * @category Component
 */
export const IconAreaChart = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M8,17l3.39-4.66c0.33-0.46,0.98-0.55,1.42-0.2L21,18.5V19c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1l0-5.72 c0.22,0,0.44,0.07,0.62,0.22L8,17z M3,11c0.44,0,0.88,0.15,1.25,0.44l3.37,2.69l2.77-3.81c0.66-0.91,1.95-1.1,2.85-0.4L21,15.97V8 c0-0.55-0.45-1-1-1h-3l-4.18-3.34c-0.45-0.36-1.1-0.27-1.44,0.2L7,10L3.6,7.45C3.42,7.32,3.21,7.25,3,7.25L3,11z"/></svg>`}
    />
  )
})
