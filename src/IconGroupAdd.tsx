import { Icon, IconProps } from '@queelag/react-core'
import React from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconGroupAdd } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconGroupAdd />
 * }
 * ```
 *
 * @category Component
 */
export function IconGroupAdd(props: Omit<IconProps, 'svg'>) {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'undefined' ? true : props.fill}
      size={props.size || 16}
      source={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10H5V8c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm11 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5s-3 1.34-3 3 1.34 3 3 3zm0 2c-2 0-6 1-6 3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2-4-3-6-3zm6.62.16c.83.73 1.38 1.66 1.38 2.84v1.5c0 .17-.02.34-.05.5h2.55c.28 0 .5-.22.5-.5V16c0-1.54-2.37-2.49-4.38-2.84z"/></svg>`}
    />
  )
}
