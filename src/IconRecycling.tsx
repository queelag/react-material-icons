import { Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef, forwardRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconRecycling } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconRecycling />
 * }
 * ```
 *
 * @category Component
 */
export const IconRecycling = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M6.2,7.41C5.97,7.27,5.89,6.96,6.03,6.73L7.2,4.78l1.03-1.71c0.39-0.65,1.33-0.65,1.72,0l1.48,2.46l-1.23,2.06l-0.72,1.2 C9.32,9.02,9.01,9.1,8.77,8.96L6.2,7.41z M21.72,12.97l-1.34-2.24c-0.14-0.23-0.44-0.31-0.68-0.18l-2.6,1.5 c-0.24,0.14-0.32,0.45-0.18,0.69L18.87,16l1.09,0c0.61,0,1.2-0.26,1.59-0.73C21.85,14.9,22,14.45,22,14 C22,13.64,21.9,13.29,21.72,12.97z M16,21h1.5c0.76,0,1.45-0.43,1.79-1.11L20.74,17H16v-0.79c0-0.45-0.54-0.67-0.85-0.35l-2.79,2.79 c-0.2,0.2-0.2,0.51,0,0.71l2.79,2.79c0.31,0.31,0.85,0.09,0.85-0.35V21z M9.5,17H5.7l-0.84,1.41c-0.3,0.5-0.32,1.12-0.06,1.65l0,0 C5.08,20.63,5.67,21,6.32,21H9.5c0.28,0,0.5-0.22,0.5-0.5v-3C10,17.22,9.78,17,9.5,17z M6.12,14.35l0.7,0.42 c0.38,0.23,0.85-0.12,0.74-0.55L6.6,10.38C6.54,10.12,6.27,9.95,6,10.02l-3.83,0.96c-0.43,0.11-0.52,0.68-0.14,0.91l0.66,0.4 l-0.41,0.69c-0.35,0.59-0.38,1.31-0.07,1.92l1.63,3.26L6.12,14.35z M17.02,5.14l-1.3-2.17C15.35,2.37,14.7,2,14,2h-3.53l3.12,5.2 L12.9,7.61c-0.38,0.23-0.3,0.81,0.14,0.91l3.83,0.96c0.27,0.07,0.54-0.1,0.61-0.36l0.96-3.83c0.11-0.43-0.36-0.78-0.74-0.55 L17.02,5.14z"/></svg>`}
    />
  )
})
