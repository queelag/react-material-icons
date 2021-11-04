import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSpeakerPhone } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSpeakerPhone />
 * }
 * ```
 *
 * @category Component
 */
export function IconSpeakerPhone(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7.76,7.83l0.02,0.02c0.35,0.35,0.89,0.38,1.3,0.09C9.91,7.37,10.92,7.02,12,7.02s2.09,0.35,2.92,0.93 c0.4,0.29,0.95,0.26,1.3-0.09l0.02-0.02c0.42-0.42,0.39-1.14-0.09-1.49C14.98,5.5,13.55,5,12,5S9.02,5.5,7.86,6.34 C7.37,6.69,7.34,7.41,7.76,7.83z"/><path d="M12,1C9.38,1,6.97,1.93,5.08,3.47C4.62,3.84,4.57,4.53,5,4.96l0,0c0.36,0.36,0.93,0.39,1.32,0.07C7.86,3.76,9.85,3,12,3 s4.14,0.76,5.69,2.03c0.39,0.32,0.96,0.29,1.32-0.07l0,0c0.42-0.42,0.38-1.11-0.08-1.49C17.03,1.93,14.62,1,12,1z"/><path d="M15,10l-6,0c-0.55,0-1,0.45-1,1v10c0,0.55,0.45,1,1,1h5.99c0.55,0,1-0.45,1-1L16,11C16,10.45,15.55,10,15,10z M15,20H9v-8 h6V20z"/></g></g></svg>`}
    />
  )
}
