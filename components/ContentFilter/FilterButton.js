import React from 'react'
import { Button } from 'antd'

import { ICON_CMD } from '../../config'
import Popover from '../Popover'

import { Wrapper, InnerBtnWrapper, FilterIcon } from './styles/filter_button'

import FilterPanel from './FilterPanel'

const FilterButton = ({ thread, onSelect, isLogin, activeFilter }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="click"
      content={
        <FilterPanel
          thread={thread}
          onSelect={onSelect}
          isLogin={isLogin}
          activeFilter={activeFilter}
        />
      }
    >
      <Button size="small" type="primary" ghost>
        <InnerBtnWrapper>
          综合排序
          <FilterIcon src={`${ICON_CMD}/filter2.svg`} />
        </InnerBtnWrapper>
      </Button>
    </Popover>
  </Wrapper>
)

export default FilterButton
