import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconAirlineSeatFlatAngled } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconAirlineSeatFlatAngled />
 * }
 * ```
 *
 * @category Component
 */
export function IconAirlineSeatFlatAngled(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22.25 14.29l-.69 1.89L9.2 11.71l1.39-3.79c.38-1.03 1.52-1.56 2.56-1.19l6.69 2.41c2.1.76 3.18 3.06 2.41 5.15zm-19.8-1.81l5.55 2V18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.63l3.58 1.29c.52.19 1.1-.08 1.29-.6.19-.52-.08-1.1-.6-1.29L3.13 10.59c-.52-.19-1.1.08-1.29.6-.18.52.09 1.1.61 1.29zM7.3 10.2c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"/></svg>`}
    />
  )
}
