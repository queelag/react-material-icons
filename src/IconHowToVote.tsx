import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconHowToVote } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconHowToVote />
 * }
 * ```
 *
 * @category Component
 */
export function IconHowToVote(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M18,12.18l-1.5,1.64l2,2.18h-13l2-2.18L6,12.18l-3,3.27V20c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4.54L18,12.18z"/><path d="M10.59,14.42c0.78,0.79,2.05,0.8,2.84,0.01l4.98-4.98c0.78-0.78,0.78-2.05,0-2.83l-3.54-3.53c-0.78-0.78-2.05-0.78-2.83,0 L7.09,8.04c-0.78,0.78-0.78,2.03-0.01,2.82L10.59,14.42z M13.46,4.5l3.53,3.53l-4.94,4.94L8.52,9.44L13.46,4.5z"/></g></g></svg>`}
    />
  )
}
