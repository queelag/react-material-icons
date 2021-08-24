import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconSettingsInputComposite } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconSettingsInputComposite />
 * }
 * ```
 *
 * @category Component
 */
export function IconSettingsInputComposite(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M5,2c0-0.55-0.45-1-1-1S3,1.45,3,2v4H2C1.45,6,1,6.45,1,7v5h6V7c0-0.55-0.45-1-1-1H5V2z M9,16 c0,1.3,0.84,2.4,2,2.82V22c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3.18c1.16-0.41,2-1.51,2-2.82v-2H9V16z M1,16 c0,1.3,0.84,2.4,2,2.82V22c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3.18C6.16,18.4,7,17.3,7,16v-2H1V16z M21,6V2c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4h-1c-0.55,0-1,0.45-1,1v5h6V7c0-0.55-0.45-1-1-1H21z M13,2c0-0.55-0.45-1-1-1s-1,0.45-1,1v4h-1C9.45,6,9,6.45,9,7v5 h6V7c0-0.55-0.45-1-1-1h-1V2z M17,16c0,1.3,0.84,2.4,2,2.82V22c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3.18 c1.16-0.41,2-1.51,2-2.82v-2h-6V16z" enable-background="new"/></g></svg>`}
    />
  )
}
