/*
 *
 * UserSettings
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { C11N } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import { Br } from '@/components/Common'
import { Radio } from '@/components/Switcher'
import ThemeSelector from '@/components/ThemeSelector'
import SectionLabel from '@/components/SectionLabel'

import { Wrapper, RadiosWrapper, Desc, ErrText } from './styles'
import { useInit, changeTheme, c11nOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserSettings')

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
            <Radio
              items={[
                {
                  value: '详细视图',
                  key: C11N.DIGEST,
                },
                {
                  value: '简洁视图',
                  key: C11N.BRIEF,
                },
              ]}
              activeKey={customization.bannerLayout}
              onChange={item => c11nOnChange('bannerLayout', item.key)}
            />
          </RadiosWrapper>
          <SectionLabel
            title="内容视图"
            iconSrc={`${ICON_CMD}/setting_list.svg`}
            desc="浏览内容时列表的显示方式, 部分板块(如视频，开源项目等)不支持列表视图"
          />
          <RadiosWrapper>
            <Radio
              items={[
                {
                  value: '列表视图',
                  key: C11N.LIST,
                },
                {
                  value: '摘要视图',
                  key: C11N.DIGEST,
                },
              ]}
              activeKey={customization.contentsLayout}
              onChange={item => c11nOnChange('contentsLayout', item.key)}
            />
          </RadiosWrapper>

          <RadiosWrapper>
            <Desc>鼠标停留在帖子/文章时显示辅助背景。</Desc>
            <Radio
              items={[
                {
                  value: '悬停背景',
                  key: true,
                },
                {
                  value: '不显示',
                  key: false,
                  dimOnActive: true,
                },
              ]}
              activeKey={customization.contentHover}
              onChange={item => c11nOnChange('contentHover', item.key)}
            />
          </RadiosWrapper>

          <SectionLabel
            title="阅读提示"
            iconSrc={`${ICON_CMD}/setting_read.svg`}
            desc="鼠标停留在帖子/文章时显示辅助背景。"
          />
          <RadiosWrapper>
            <Radio
              items={[
                {
                  value: '已读标记',
                  key: true,
                },
                {
                  value: '不标记',
                  key: false,
                  dimOnActive: true,
                },
              ]}
              activeKey={customization.markViewed}
              onChange={item => c11nOnChange('markViewed', item.key)}
            />
          </RadiosWrapper>
          <SectionLabel
            title="显示密度"
            iconSrc={`${ICON_CMD}/setting_number.svg`}
            desc="每页帖子的默认显示条数。"
          />
          <RadiosWrapper>
            <Radio
              items={[
                {
                  value: '20条',
                  key: '20',
                },
                {
                  value: '25条',
                  key: '25',
                },
                {
                  value: '30条',
                  key: '30',
                },
              ]}
              activeKey={customization.displayDensity}
              onChange={item => c11nOnChange('displayDensity', item.key)}
            />
          </RadiosWrapper>
          <SectionLabel
            title="打赏设置(wip)"
            iconSrc={`${ICON_CMD}/dashang.svg`}
            desc="开发中：开启后赞赏按钮将出现在你的文章底部, 注意仅支持原创内容， 链接分享、转载等不显示打赏按钮。提现需提交申请，将在 3-5 个工作日内到达你的账户。"
          />
          <Radio
            items={[
              {
                value: '开启',
                key: '1',
              },
              {
                value: '关闭',
                key: '2',
                dimOnActive: true,
              },
            ]}
            activeKey="2"
          />
          <Br bottom="40px" />
          <SectionLabel
            title="邮件订阅(wip)"
            iconSrc={`${ICON_CMD}/mail.svg`}
            desc="接收邮件提醒，订阅, 账单, 每周精选等等, 我们不会滥用你的信任，建议开启。"
          />
          <Radio
            items={[
              {
                value: '开启',
                key: '1',
              },
              {
                value: '关闭',
                key: '2',
                dimOnActive: true,
              },
            ]}
            activeKey="2"
          />
        </Wrapper>
      ) : (
        <ErrText>请登录后查看本人的设置信息</ErrText>
      )}
    </React.Fragment>
  )
}

export default connectStore(UserSettingsContainer)
