import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Title,
  Didiver,
  Option,
  OptionIcon,
  OptionText,
} from './styles/setting_menu'

import { THREAD } from '../../utils'

const SettingMenu = ({
  thread,
  customization: {
    bannerLayout,
    contentsLayout,
    contentDivider,
    markViewed,
    displayDensity,
  },
  onCustomChange,
}) => (
  <Wrapper>
    <React.Fragment>
      <Title>视图显示</Title>
      <Option
        onClick={onCustomChange.bind(this, {
          bannerLayout: bannerLayout === 'DIGEST' ? 'BRIEF' : 'DIGEST',
        })}
      >
        <OptionText active>扩展模式</OptionText>
        <OptionIcon
          src={
            bannerLayout === 'BRIEF'
              ? `${ICON_CMD}/turn_on.svg`
              : `${ICON_CMD}/turn_off.svg`
          }
          active
        />
      </Option>
      {!R.contains(thread, [THREAD.VIDEO, THREAD.REPO]) ? (
        <React.Fragment>
          <Option
            onClick={onCustomChange.bind(this, { contentsLayout: 'LIST' })}
          >
            <OptionText>列表视图</OptionText>
            <OptionIcon
              src={`${ICON_CMD}/check2.svg`}
              active={contentsLayout === 'LIST'}
            />
          </Option>
          <Option
            onClick={onCustomChange.bind(this, { contentsLayout: 'DIGEST' })}
          >
            <OptionText active>摘要视图</OptionText>
            <OptionIcon
              src={`${ICON_CMD}/check2.svg`}
              active={contentsLayout === 'DIGEST'}
            />
          </Option>
          <Didiver />
        </React.Fragment>
      ) : (
        <Didiver />
      )}
    </React.Fragment>

    <Title>阅读辅助</Title>
    <Option onClick={onCustomChange.bind(this, { markViewed: !markViewed })}>
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

    {R.contains(thread, [THREAD.POST, THREAD.JOB]) ? (
      <React.Fragment>
        <Option
          onClick={onCustomChange.bind(this, {
            contentDivider: !contentDivider,
          })}
        >
          <OptionText active>辅助分界</OptionText>
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
    <Option onClick={onCustomChange.bind(this, { displayDensity: '20' })}>
      <OptionText>20条 / 页</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={displayDensity === '20'}
      />
    </Option>
    <Option onClick={onCustomChange.bind(this, { displayDensity: '25' })}>
      <OptionText>25条 / 页</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={displayDensity === '25'}
      />
    </Option>
    <Option onClick={onCustomChange.bind(this, { displayDensity: '30' })}>
      <OptionText>30条 / 页</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={displayDensity === '30'}
      />
    </Option>
  </Wrapper>
)

export default React.memo(SettingMenu)
