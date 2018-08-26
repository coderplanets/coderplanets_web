/*
 *
 * UserSettings
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'
import { ICON_ASSETS } from '../../config'

import { ThemeSelector, SectionLabel } from '../../components'
import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserSettings')
/* eslint-enable no-unused-vars */

class UserSettingsContainer extends React.Component {
  componentWillMount() {
    const { userSettings } = this.props
    logic.init(userSettings)
  }

  render() {
    const { userSettings } = this.props
    const { curTheme } = userSettings

    return (
      <div>
        <SectionLabel
          title="主题设置"
          iconSrc={`${ICON_ASSETS}/cmd/setting_theme.svg`}
          desc="请注意：付费主题可以随意预览，但是设置不会被保存。"
        />
        <ThemeSelector
          curTheme={curTheme}
          changeTheme={logic.changeTheme}
          displayStyle="detail"
        />
        <SectionLabel
          title="打赏设置"
          iconSrc={`${ICON_ASSETS}/cmd/dashang.svg`}
          desc="仅支持原创内容， 链接分享、转载等不支持打赏设置。"
        />
        <div>打赏功能： 开启 / 关闭</div>
        <div>打赏金额： xx 元</div>
      </div>
    )
  }
}

export default inject(storePlug('userSettings'))(
  observer(UserSettingsContainer)
)
