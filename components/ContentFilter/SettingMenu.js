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

const SettingMenu = () => (
  <Wrapper>
    <Title>视图显示</Title>
    <Option>
      <OptionText>列表视图</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
    <Option>
      <OptionText active>摘要视图</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active />
    </Option>
    <Didiver />
    <Title>阅读提示</Title>
    <Option>
      <OptionText>显示已读</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
    <Option>
      <OptionText active>不显已读</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active />
    </Option>
  </Wrapper>
)

export default SettingMenu
