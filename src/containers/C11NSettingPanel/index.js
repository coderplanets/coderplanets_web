/*
 *
 * C11NSettingPanel
 *
 */

import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'
import { THREAD, C11N } from '@constant'

import {
  Wrapper,
  HeaderTitle,
  Title,
  Desc,
  Didiver,
  Option,
  OptionIcon,
  OptionText,
} from './styles'
import { useInit, onC11NChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:C11NSettingPanel')

const C11NSettingPanelContainer = ({ c11NSettingPanel }) => {
  useInit(c11NSettingPanel)

  const { accountInfo, curThread } = c11NSettingPanel
  console.log(' accountInfo: ', accountInfo.customization)
  const {
    customization: {
      bannerLayout,
      contentsLayout,
      contentDivider,
      contentHover,
      markViewed,
      displayDensity,
    },
  } = accountInfo

  return (
    <Wrapper testid="c11NSettingPanel">
      <React.Fragment>
        <HeaderTitle>自定义阅读设置</HeaderTitle>
        <br />
        <Title>社区视图</Title>
        <Desc>社区摘要信息的显示模式。</Desc>
        <Option
          onClick={onC11NChange.bind(this, {
            bannerLayout:
              bannerLayout === C11N.DIGEST ? C11N.BRIEF : C11N.DIGEST,
          })}
        >
          <OptionText active>扩展模式</OptionText>
          <OptionIcon
            src={
              bannerLayout === C11N.BRIEF
                ? `${ICON_CMD}/turn_on.svg`
                : `${ICON_CMD}/turn_off.svg`
            }
            active
          />
        </Option>
        <Didiver />

        <Title>文章视图</Title>
        <Desc>这里是视图显示的描述信息</Desc>

        {!R.contains(curThread, [THREAD.VIDEO, THREAD.REPO]) ? (
          <React.Fragment>
            <Option
              onClick={onC11NChange.bind(this, { contentsLayout: C11N.LIST })}
            >
              <OptionText>列表视图</OptionText>
              <OptionIcon
                src={`${ICON_CMD}/check2.svg`}
                active={contentsLayout === C11N.LIST}
              />
            </Option>
            <Option
              onClick={onC11NChange.bind(this, { contentsLayout: C11N.DIGEST })}
            >
              <OptionText active>摘要视图</OptionText>
              <OptionIcon
                src={`${ICON_CMD}/check2.svg`}
                active={contentsLayout === C11N.DIGEST}
              />
            </Option>
            <Didiver />
          </React.Fragment>
        ) : (
          <Didiver />
        )}
      </React.Fragment>

      <Title>阅读辅助</Title>
      <Desc>文章列表的阅读辅助类工具。</Desc>
      <Option onClick={onC11NChange.bind(this, { markViewed: !markViewed })}>
        <OptionText>已读标记</OptionText>
        <OptionIcon
          src={
            markViewed === true
              ? `${ICON_CMD}/turn_on.svg`
              : `${ICON_CMD}/turn_off.svg`
          }
          active
        />
      </Option>

      <Option
        onClick={onC11NChange.bind(this, { contentHover: !contentHover })}
      >
        <OptionText>悬停背景</OptionText>
        <OptionIcon
          src={
            contentHover === true
              ? `${ICON_CMD}/turn_on.svg`
              : `${ICON_CMD}/turn_off.svg`
          }
          active
        />
      </Option>

      {R.contains(curThread, [THREAD.POST, THREAD.JOB]) ? (
        <React.Fragment>
          <Option
            onClick={onC11NChange.bind(this, {
              contentDivider: !contentDivider,
            })}
          >
            <OptionText active>辅助分隔</OptionText>
            <OptionIcon
              src={
                contentDivider === true
                  ? `${ICON_CMD}/turn_on.svg`
                  : `${ICON_CMD}/turn_off.svg`
              }
              active
            />
          </Option>
          <Didiver />
        </React.Fragment>
      ) : (
        <Didiver />
      )}

      <Title>显示密度</Title>
      <Desc>每页帖子的默认显示条数。</Desc>
      <Option onClick={onC11NChange.bind(this, { displayDensity: '20' })}>
        <OptionText>20条 / 页</OptionText>
        <OptionIcon
          src={`${ICON_CMD}/check2.svg`}
          active={displayDensity === '20'}
        />
      </Option>
      <Option onClick={onC11NChange.bind(this, { displayDensity: '25' })}>
        <OptionText>25条 / 页</OptionText>
        <OptionIcon
          src={`${ICON_CMD}/check2.svg`}
          active={displayDensity === '25'}
        />
      </Option>
      <Option onClick={onC11NChange.bind(this, { displayDensity: '30' })}>
        <OptionText>30条 / 页</OptionText>
        <OptionIcon
          src={`${ICON_CMD}/check2.svg`}
          active={displayDensity === '30'}
        />
      </Option>
    </Wrapper>
  )
}

export default connectStore(C11NSettingPanelContainer)
