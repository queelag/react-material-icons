import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconStackedBarChart } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconStackedBarChart />
 * }
 * ```
 *
 * @category Component
 */
export const IconStackedBarChart = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M6,10h3v8.5C9,19.33,8.33,20,7.5,20h0C6.67,20,6,19.33,6,18.5V10z M7.5,5L7.5,5C8.33,5,9,5.67,9,6.5V9H6V6.5 C6,5.67,6.67,5,7.5,5z M16,16h3v2.5c0,0.83-0.67,1.5-1.5,1.5h0c-0.83,0-1.5-0.67-1.5-1.5V16z M11,13h3v5.5c0,0.83-0.67,1.5-1.5,1.5 h0c-0.83,0-1.5-0.67-1.5-1.5V13z M12.5,9L12.5,9c0.83,0,1.5,0.67,1.5,1.5V12h-3v-1.5C11,9.67,11.67,9,12.5,9z M19,15h-3v-0.5 c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5V15z"/></g></svg>`}
    />
  )
})
