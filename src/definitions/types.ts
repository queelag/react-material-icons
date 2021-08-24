import { IconProps } from '@queelag/react-core'

export type IconPickerConfiguration = {
  error: (props?: IconProps) => JSX.Element
  information: (props?: IconProps) => JSX.Element
  success: (props?: IconProps) => JSX.Element
  warning: (props?: IconProps) => JSX.Element
}
