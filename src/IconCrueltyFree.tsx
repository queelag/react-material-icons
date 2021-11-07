import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCrueltyFree } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCrueltyFree />
 * }
 * ```
 *
 * @category Component
 */
export const IconCrueltyFree = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M16.84,14.52c-0.26-0.19-0.62-0.63-0.79-0.84C17.24,12.01,19,8.87,19,5c0-1.95-0.74-3-2-3c-1.54,0-3.96,2.06-5,5.97 C10.96,4.06,8.54,2,7,2C5.74,2,5,3.05,5,5c0,3.87,1.76,7.01,2.95,8.68c-0.17,0.21-0.53,0.65-0.79,0.84 c-0.5,0.41-1.66,1.37-1.66,2.98c0,2.21,1.79,4,4,4c1.55,0,2.5-0.56,2.5-0.56s0.95,0.56,2.5,0.56c2.21,0,4-1.79,4-4 C18.5,15.89,17.34,14.93,16.84,14.52z M9.35,12.2C8.34,10.7,7,8.12,7,5c0-0.49,0.06-0.8,0.12-0.97c0.94,0.31,3.24,2.71,3.38,7.64 C10.03,11.79,9.66,11.97,9.35,12.2z M10.5,16.75c-0.28,0-0.5-0.34-0.5-0.75c0-0.41,0.22-0.75,0.5-0.75S11,15.59,11,16 C11,16.41,10.78,16.75,10.5,16.75z M12,19.5c-0.55,0-1-0.72-1-1c0-0.28,0.45-0.5,1-0.5s1,0.22,1,0.5C13,18.78,12.55,19.5,12,19.5z M13.5,16.75c-0.28,0-0.5-0.34-0.5-0.75c0-0.41,0.22-0.75,0.5-0.75S14,15.59,14,16C14,16.41,13.78,16.75,13.5,16.75z M13.5,11.67 c0.14-4.93,2.44-7.33,3.38-7.64C16.94,4.2,17,4.51,17,5c0,3.12-1.34,5.7-2.35,7.2C14.34,11.97,13.97,11.79,13.5,11.67z"/></svg>`}
    />
  )
})
