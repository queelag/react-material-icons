import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSignalWifiStatusbar4Bar } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSignalWifiStatusbar4Bar />
 * }
 * ```
 *
 * @category Component
 */
export const IconSignalWifiStatusbar4Bar = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,4C7.7,4,3.78,5.6,0.79,8.24C0.35,8.63,0.32,9.3,0.73,9.71l10.56,10.58c0.39,0.39,1.02,0.39,1.42,0L23.27,9.71 c0.41-0.41,0.38-1.08-0.06-1.47C20.22,5.6,16.3,4,12,4z"/></g></svg>`}
    />
  )
})
