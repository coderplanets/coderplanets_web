/*
 *
 * UserSettings
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Radio } from 'antd'
// import { } from './styles'
import { ICON_CMD } from '../../config'

import { ThemeSelector, SectionLabel, Button } from '../../components'

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
  componentDidMount() {
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
          iconSrc={`${ICON_CMD}/setting_theme.svg`}
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
          displayStyle="card"
        />
        <SectionLabel
          title="视图选项"
          iconSrc={`${ICON_CMD}/setting_list.svg`}
          desc="浏览帖子/招聘/视频/开源项目时的列表显示方式。"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={2}>
            <Radio value={1}>列表视图</Radio>
            <Radio value={2}>摘要视图</Radio>
          </RadioGroup>
        </RadiosWrapper>

        <SectionLabel
          title="阅读提示"
          iconSrc={`${ICON_CMD}/setting_read.svg`}
          desc="是否在阅读列表左侧显示已读标签, 以便突出未读内容？"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={1}>
            <Radio value={1}>显示</Radio>
            <Radio value={2}>不显示</Radio>
          </RadioGroup>
        </RadiosWrapper>

        <SectionLabel
          title="显示密度"
          iconSrc={`${ICON_CMD}/setting_number.svg`}
          desc="浏览帖子/招聘/视频/开源项目时每页显示的条数。"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={2}>
            <Radio value={1}>20条 / 每页</Radio>
            <Radio value={2}>25条 / 每页</Radio>
            <Radio value={3}>30条 / 每页</Radio>
          </RadioGroup>
        </RadiosWrapper>

        <SectionLabel
          title="打赏设置(wip)"
          iconSrc={`${ICON_CMD}/dashang.svg`}
          desc="开启后赞赏按钮将出现在你的文章底部, 注意仅支持原创内容， 链接分享、转载等不支持打赏设置。"
        />
        <RadiosWrapper>
          <RadioGroup onChange={debug} value={2}>
            <Radio value={1}>开启</Radio>
            <Radio value={2}>关闭</Radio>
          </RadioGroup>
        </RadiosWrapper>
        <SectionLabel
          title="邮件提醒(wip)"
          iconSrc={`${ICON_CMD}/mail.svg`}
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
          iconSrc={`${ICON_CMD}/github.svg`}
          desc="将绑定的 Github 账户信息同步到最新状态, 上次同步时间: 3天前。"
        />
        <Button size="small" type="primary" ghost>
          同步 Github
        </Button>
      </Wrapper>
    )
  }
}

export default inject(storePlug('userSettings'))(
  observer(UserSettingsContainer)
)
