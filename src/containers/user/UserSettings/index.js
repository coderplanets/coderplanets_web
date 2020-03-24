/*
 *
 * UserSettings
 *
 */

import React from 'react'
import { Radio } from 'antd'
import 'antd/lib/radio/style/index.css'

import { ICON_CMD, ISSUE_ADDR } from '@config'
import { C11N } from '@constant'
import { connectStore, buildLog } from '@utils'

import ThemeSelector from '@components/ThemeSelector'
import Tooltip from '@components/Tooltip'
import SectionLabel from '@components/SectionLabel'
import DiscussLinker from '@components/DiscussLinker'

import { Wrapper, RadiosWrapper, OptionsWrapper, ErrText } from './styles'
import { useInit, changeTheme, c11nOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserSettings')

const RadioGroup = Radio.Group

const UserSettingsContainer = ({ userSettings }) => {
  useInit(userSettings)

  const { curTheme, accountInfo, isSelfViewing } = userSettings
  const { customization } = accountInfo

  return (
    <React.Fragment>
      {isSelfViewing ? (
        <Wrapper>
          <SectionLabel
            title="主题设置"
            iconSrc={`${ICON_CMD}/setting_theme.svg`}
            desc="如果你有更好的配色灵感，欢迎反馈给社区。"
          />
          <ThemeSelector
            curTheme={curTheme}
            changeTheme={changeTheme}
            displayStyle="card"
          />
          <SectionLabel
            title="顶部视图"
            iconSrc={`${ICON_CMD}/setting_banner.svg`}
            desc="浏览社区内容时，顶部社区信息摘要的显示方式。"
          />
          <RadiosWrapper>
            <RadioGroup
              onChange={c11nOnChange('bannerLayout')}
              value={customization.bannerLayout}
            >
              <Radio value={C11N.DIGEST}>详细视图</Radio>
              <Radio value={C11N.BRIEF}>简洁视图</Radio>
            </RadioGroup>
          </RadiosWrapper>
          <SectionLabel
            title="内容视图"
            iconSrc={`${ICON_CMD}/setting_list.svg`}
            desc="浏览内容时列表的显示方式, 部分板块(如视频，开源项目等)不支持列表视图"
          />
          <RadiosWrapper>
            <RadioGroup
              onChange={c11nOnChange('contentsLayout')}
              value={customization.contentsLayout}
            >
              <Radio value={C11N.LIST}>列表视图</Radio>
              <Radio value={C11N.DIGEST}>摘要视图</Radio>
            </RadioGroup>
          </RadiosWrapper>
          <SectionLabel
            title="阅读提示"
            iconSrc={`${ICON_CMD}/setting_read.svg`}
            desc="是否在阅读列表左侧显示已读标签, 以便突出未读内容？"
          />
          <RadiosWrapper>
            <RadioGroup
              onChange={c11nOnChange('markViewed')}
              value={customization.markViewed}
            >
              {/* eslint-disable react/jsx-boolean-value */}
              <Radio value={true}>显示</Radio>
              {/* eslint-enable react/jsx-boolean-value */}
              <Radio value={false}>不显示</Radio>
            </RadioGroup>
          </RadiosWrapper>
          <SectionLabel
            title="显示密度"
            iconSrc={`${ICON_CMD}/setting_number.svg`}
            desc="浏览帖子/招聘/视频/开源项目等内容时， 每页显示的条数。"
          />
          <RadiosWrapper>
            <RadioGroup
              onChange={c11nOnChange('displayDensity')}
              value={customization.displayDensity}
            >
              <Radio value="20">20条 / 每页</Radio>
              <Radio value="25">25条 / 每页</Radio>
              <Radio value="30">30条 / 每页</Radio>
            </RadioGroup>
          </RadiosWrapper>
          <SectionLabel
            title="打赏设置(wip)"
            iconSrc={`${ICON_CMD}/dashang.svg`}
            desc="开启后赞赏按钮将出现在你的文章底部, 注意仅支持原创内容， 链接分享、转载等不显示打赏按钮。提现需提交申请，将在 3-5 个工作日内到达你的账户，不收取任何手续费用。"
          />
          <Tooltip
            placement="bottom"
            trigger="click"
            content={
              <DiscussLinker title="打赏设置" addr={`${ISSUE_ADDR}/268`} />
            }
          >
            <OptionsWrapper>
              <RadiosWrapper>
                <RadioGroup onChange={log} value={2}>
                  <Radio value={1}>开启</Radio>
                  <Radio value={2}>关闭</Radio>
                </RadioGroup>
              </RadiosWrapper>
            </OptionsWrapper>
          </Tooltip>
          <SectionLabel
            title="邮件订阅(wip)"
            iconSrc={`${ICON_CMD}/mail.svg`}
            desc="接收邮件提醒，订阅, 账单, 每周精选等等, 我们不会滥用你的信任，建议开启。"
          />
          <Tooltip
            placement="bottom"
            content={
              <DiscussLinker title="邮件订阅" addr={`${ISSUE_ADDR}/267`} />
            }
          >
            <OptionsWrapper>
              <RadiosWrapper>
                <RadioGroup onChange={log} value={2}>
                  <Radio value={1}>开启</Radio>
                  <Radio value={2}>关闭</Radio>
                </RadioGroup>
              </RadiosWrapper>
            </OptionsWrapper>
          </Tooltip>
        </Wrapper>
      ) : (
        <ErrText>请登录后查看本人的设置信息</ErrText>
      )}
    </React.Fragment>
  )
}

export default connectStore(UserSettingsContainer)
