import { FeedbackType, IconProps } from '@queelag/react-core'
import { IconPickerConfiguration } from '../definitions/types'
import { Dummy } from '../modules/dummy'

/**
 * Picks error, information, success and warning icons from a configuration.
 *
 * @category Picker
 */
export class IconPicker {
  /**
   * An {@link IconPickerConfiguration} which determines the icons that will be used.
   */
  static configuration: IconPickerConfiguration = Dummy.iconPickerConfiguration

  /**
   * Picks an icon from a FeedbackType.
   */
  static byFeedbackType(type: FeedbackType, props?: Omit<IconProps, 'svg'>): JSX.Element {
    switch (type) {
      case FeedbackType.ERROR:
        return this.configuration.error(props)
      case FeedbackType.INFORMATION:
        return this.configuration.information(props)
      case FeedbackType.SUCCESS:
        return this.configuration.success(props)
      case FeedbackType.WARNING:
        return this.configuration.warning(props)
    }
  }
}
