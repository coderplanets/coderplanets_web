import React from 'react'

import { ICON_CMD } from '@config'

import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  ResultText,
  ResultDivider,
  MoreOptionWrapper,
  MoreDivider,
  SettingIcon,
} from './styles/filter_result'

import SettingMenu from './SettingMenu'

const FilterResult = ({ thread, totalCount, customization, onC11NChange }) => {
  return (
    <Wrapper>
      <ResultText>结果共 {totalCount} 条</ResultText>
      <ResultDivider />

      <MoreOptionWrapper>
        <Tooltip content="近期热门" placement="bottom">
          <div>
            <SettingIcon src={`${ICON_CMD}/header/more_data.svg`} />
          </div>
        </Tooltip>

        <MoreDivider />
        <Tooltip
          placement="bottom"
          trigger="click"
          content={
            <SettingMenu
              thread={thread}
              customization={customization}
              onC11NChange={onC11NChange}
            />
          }
        >
          <div>
            <SettingIcon src={`${ICON_CMD}/view_setting.svg`} />
          </div>
        </Tooltip>
      </MoreOptionWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterResult)
