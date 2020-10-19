import React from 'react'
import dynamic from 'next/dynamic'

import { ICON_CMD } from '@/config'

import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  InnerBtnWrapper,
  ButtonWrapper,
  FilterIcon,
} from './styles/filter_button'

const FilterPanel = dynamic(() => import('./FilterPanel/index'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

const FilterButton = ({ thread, onSelect, isLogin, activeFilter }) => {
  return (
    <Wrapper>
      <Tooltip
        placement="bottom-start"
        trigger="click"
        hideOnClick={false}
        content={
          FilterPanel && (
            <FilterPanel
              thread={thread}
              onSelect={onSelect}
              isLogin={isLogin}
              activeFilter={activeFilter}
            />
          )
        }
      >
        <ButtonWrapper size="small" type="primary" ghost>
          <InnerBtnWrapper>
            综合排序
            <FilterIcon src={`${ICON_CMD}/dropdown_arrow.svg`} />
          </InnerBtnWrapper>
        </ButtonWrapper>
      </Tooltip>
    </Wrapper>
  )
}

export default React.memo(FilterButton)
