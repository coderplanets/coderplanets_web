import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Title,
  Didiver,
  Option,
  OptionIcon,
  OptionText,
} from './styles/setting_menu'

const SettingMenu = ({
  customization: { contentsLayout, markViewed, displayDensity },
  onCustomChange,
}) => (
  <Wrapper>
    <Title>视图显示</Title>
    <Option onClick={onCustomChange.bind(this, { contentsLayout: 'LIST' })}>
      <OptionText>列表视图</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={contentsLayout === 'LIST'}
      />
    </Option>
    <Option onClick={onCustomChange.bind(this, { contentsLayout: 'DIGEST' })}>
      <OptionText active>摘要视图</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={contentsLayout === 'DIGEST'}
      />
    </Option>
    <Didiver />
    <Title>阅读标记</Title>
    <Option onClick={onCustomChange.bind(this, { markViewed: true })}>
      <OptionText>已读标记</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active={markViewed === true} />
    </Option>
    <Option onClick={onCustomChange.bind(this, { markViewed: false })}>
      <OptionText active>不显标记</OptionText>
      <OptionIcon
        src={`${ICON_CMD}/check2.svg`}
        active={markViewed === false}
      />
    </Option>
    <Didiver />
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
