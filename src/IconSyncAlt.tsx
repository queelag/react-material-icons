import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSyncAlt } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSyncAlt />
 * }
 * ```
 *
 * @category Component
 */
export const IconSyncAlt = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21.65,7.65l-2.79-2.79C18.54,4.54,18,4.76,18,5.21V7H4C3.45,7,3,7.45,3,8v0c0,0.55,0.45,1,1,1h14v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,8.16,21.84,7.84,21.65,7.65z"/><path d="M2.35,16.35l2.79,2.79C5.46,19.46,6,19.24,6,18.79V17h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6v-1.79 c0-0.45-0.54-0.67-0.85-0.35l-2.79,2.79C2.16,15.84,2.16,16.16,2.35,16.35z"/></g></g></svg>`}
    />
  )
})
