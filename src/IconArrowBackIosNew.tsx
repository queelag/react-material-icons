import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconArrowBackIosNew } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconArrowBackIosNew />
 * }
 * ```
 *
 * @category Component
 */
export function IconArrowBackIosNew(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><g><path d="M16.88,2.88L16.88,2.88c-0.49-0.49-1.28-0.49-1.77,0l-8.41,8.41c-0.39,0.39-0.39,1.02,0,1.41l8.41,8.41 c0.49,0.49,1.28,0.49,1.77,0l0,0c0.49-0.49,0.49-1.28,0-1.77L9.54,12l7.35-7.35C17.37,4.16,17.37,3.37,16.88,2.88z"/></g></svg>`}
    />
  )
}
