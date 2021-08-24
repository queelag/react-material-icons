import { IconProps } from '@queelag/react-core'
import React from 'react'
import { IconPickerConfiguration } from '../definitions/types'
import { IconCancel } from '../IconCancel'
import { IconCheckCircle } from '../IconCheckCircle'
import { IconInfo } from '../IconInfo'
import { IconWarning } from '../IconWarning'

/** @internal */
export class Dummy {
  static get iconPickerConfiguration(): IconPickerConfiguration {
    return {
      error: (props?: IconProps) => <IconCancel {...props} />,
      information: (props?: IconProps) => <IconInfo {...props} />,
      success: (props?: IconProps) => <IconCheckCircle {...props} />,
      warning: (props?: IconProps) => <IconWarning {...props} />
    }
  }
}
