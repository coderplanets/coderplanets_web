/*
 *
 * UserSettings
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'
import { ICON_ASSETS } from '../../config'

import { ThemeSelector, SectionLabel, Radio, Button } from '../../components'
import {
  Wrapper,
  LabelDescWrapper,
  LabelDescLink,
  RadiosWrapper,
} from './styles'
import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserSettings')
/* eslint-enable no-unused-vars */

const RadioGroup = Radio.Group

class UserSettingsContainer extends React.Component {
  componentWillMount() {
    const { userSettings } = this.props
    logic.init(userSettings)
  }

  render() {
    const { userSettings } = this.props
    const { curTheme } = userSettings

    return (
      <Wrapper>
        <SectionLabel
          title="主题设置"
          iconSrc={`${ICON_ASSETS}/cmd/setting_theme.svg`}
          node={
            <LabelDescWrapper>
              普通用户仅支持预览，设置不会被保存，您可以选择
              <LabelDescLink onClick={logic.sponsorHepler}>
                赞助
              </LabelDescLink>{' '}
              或升级成
              <LabelDescLink onClick={logic.upgradeHepler}>
                高级用户
              </LabelDescLink>
              解锁该功能。
            </LabelDescWrapper>
          }
        />
        <ThemeSelector
          curTheme={curTheme}
          changeTheme={logic.changeTheme}
          displayStyle="detail"
        />
        <SectionLabel
          title="打赏设置"
          iconSrc={`${ICON_ASSETS}/cmd/dashang.svg`}
          desc="开启后赞赏按钮将出现在你的文章底部, 注意仅支持原创内容， 链接分享、转载等不支持打赏设置。"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={1}>
            <Radio value={1}>开启</Radio>
            <Radio value={2}>关闭</Radio>
          </RadioGroup>
        </RadiosWrapper>
        <SectionLabel
          title="邮件提醒"
          iconSrc={`${ICON_ASSETS}/cmd/mail.svg`}
          desc="接收邮件提醒，订阅, 账单, 每周精选等等, 我们不会滥用你的信任，建议开启。"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={1}>
            <Radio value={1}>开启</Radio>
            <Radio value={2}>关闭</Radio>
          </RadioGroup>
        </RadiosWrapper>
        <SectionLabel
          title="Github 同步"
          iconSrc={`${ICON_ASSETS}/cmd/github.svg`}
          desc="将绑定的 Github 账户信息同步到最新状态, 上次同步时间: 3天前。"
        />

        <Button size="small" type="primary" ghost>
          同步 Github 账号信息
        </Button>
      </Wrapper>
    )
  }
}

export default inject(storePlug('userSettings'))(
  observer(UserSettingsContainer)
)
