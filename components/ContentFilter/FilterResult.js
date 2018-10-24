import React from 'react'
import { ICON_CMD } from '../../config'

import {
  Wrapper,
  ResultText,
  SettingWrapper,
  SettingIcon,
} from './styles/filter_result'

const FilterResult = ({ totalCount }) => (
  <Wrapper>
    <ResultText>结果共 {totalCount} 条</ResultText>
    <SettingWrapper>
      <SettingIcon src={`${ICON_CMD}/view_setting.svg`} />
    </SettingWrapper>
  </Wrapper>
)

export default FilterResult
