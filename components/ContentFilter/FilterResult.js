import React from 'react'

import Popover from '../Popover'
import { ICON_CMD } from '../../config'

import {
  Wrapper,
  ResultText,
  SettingWrapper,
  SettingIcon,
} from './styles/filter_result'

import SettingMenu from './SettingMenu'

const FilterResult = ({ totalCount, customization, onCustomChange }) => (
  <Wrapper>
    <ResultText>结果共 {totalCount} 条</ResultText>
    <Popover
      placement="bottomRight"
      trigger="click"
      content={
        <SettingMenu
          customization={customization}
          onCustomChange={onCustomChange}
        />
      }
    >
      <SettingWrapper>
        <SettingIcon src={`${ICON_CMD}/view_setting.svg`} />
      </SettingWrapper>
    </Popover>
  </Wrapper>
)

export default FilterResult
