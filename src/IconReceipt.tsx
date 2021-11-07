import { forwardRef, Icon, IconProps } from '@queelag/react-core'
import React, { ForwardedRef } from 'react'

/**
 * Usage:
 *
 * ```typescript
 * import { IconReceipt } from '@queelag/react-material-icons'
 *
 * function App() {
 *   return <IconReceipt />
 * }
 * ```
 *
 * @category Component
 */
export const IconReceipt = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <Icon
      {...props}
      fill={typeof props.fill === 'string' ? props.fill : props.fill !== false}
      ref={ref}
      size={props.size || 16}
      src={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 2.21c-.13 0-.26.05-.35.15l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.8-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.09-.09-.22-.14-.35-.14V21.8c.13 0 .26-.05.35-.15l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.1.1.23.15.35.15V2.21zM17 17H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>`}
    />
  )
})
