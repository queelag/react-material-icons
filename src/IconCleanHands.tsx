import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconCleanHands } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconCleanHands />
 * }
 * ```
 *
 * @category Component
 */
export function IconCleanHands(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><g><path d="M14.99,7l1.37-0.63L16.99,5l0.63,1.37L18.99,7l-1.37,0.63L16.99,9l-0.63-1.37L14.99,7z M20,14c1.1,0,2-0.9,2-2 c0-0.78-0.99-2.44-1.58-3.36c-0.2-0.31-0.64-0.31-0.84,0C18.99,9.56,18,11.22,18,12C18,13.1,18.9,14,20,14z M9.24,9.5L15,11.65V11 c0-2.42-1.72-4.44-4-4.9V4h2c0.35,0,0.68,0.06,1,0.18c0.37,0.13,0.78,0.05,1.05-0.22l0,0c0.51-0.51,0.34-1.39-0.33-1.64 C14.19,2.11,13.61,2,13,2H8.5c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1H9v2.11C7.22,6.48,5.8,7.79,5.25,9.5H9.24z M3,11L3,11 c-1.1,0-2,0.9-2,2v7c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-7C5,11.9,4.1,11,3,11z M19.99,17h-6.83c-0.11,0-0.22-0.02-0.33-0.06 l-1.47-0.51c-0.26-0.09-0.39-0.37-0.3-0.63l0,0c0.09-0.26,0.38-0.4,0.64-0.3l1.12,0.43c0.11,0.04,0.24,0.07,0.36,0.07h2.63 c0.65,0,1.18-0.53,1.18-1.18v0c0-0.49-0.31-0.93-0.77-1.11L9.3,11.13C9.08,11.04,8.84,11,8.6,11H7v9.02l6.37,1.81 c0.41,0.12,0.85,0.1,1.25-0.05L22,19l0,0C22,17.89,21.1,17,19.99,17z"/></g></svg>`}
    />
  )
}
