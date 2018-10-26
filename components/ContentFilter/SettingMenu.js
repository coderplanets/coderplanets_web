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
  customization: { contentsLayout, contentDivider, markViewed, displayDensity },
  onCustomChange,
}) => (
  <Wrapper>
    <React.Fragment>
      {!R.contains(thread, [THREAD.VIDEO, THREAD.REPO]) ? (
        <React.Fragment>
          <Title>视图显示</Title>
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
      ) : null}
    </React.Fragment>

    <Title>阅读辅助</Title>
    <Option onClick={onCustomChange.bind(this, { markViewed: !markViewed })}>
      <OptionText>已读标记</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active={markViewed === true} />
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
            src={`${ICON_CMD}/check2.svg`}
            active={contentDivider === true}
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

export default SettingMenu
