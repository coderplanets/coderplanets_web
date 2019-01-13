import React from 'react'

import { ICON_CMD } from '../../config'
import Popover from '../Popover'

import {
  Wrapper,
  ResultText,
  SettingWrapper,
  SettingIcon,
} from './styles/filter_result'

import SettingMenu from './SettingMenu'

const FilterResult = ({ thread, totalCount, customization, onC11NChange }) => (
  <Wrapper>
    <ResultText>结果共 {totalCount} 条</ResultText>
    <Popover
      placement="bottomRight"
      trigger="hover"
      content={
        <SettingMenu
          thread={thread}
          customization={customization}
          onC11NChange={onC11NChange}
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
