import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TThread, TArticleFilter } from '@/spec'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  Label,
  InnerBtnWrapper,
  ButtonWrapper,
  FilterIcon,
} from './styles/cat_filter_button'

const FilterPanel = dynamic(() => import('./FilterPanel'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

type TProps = {
  thread: TThread
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
}

const CatFilterButton: FC<TProps> = ({ thread, onSelect, activeFilter }) => {
  return (
    <Wrapper>
      <Label>类别</Label>
      <Tooltip
        placement="bottom-end"
        trigger="click"
        hideOnClick={false}
        content={
          FilterPanel && (
            <FilterPanel
              thread="ArticleCat"
              onSelect={onSelect}
              activeFilter={activeFilter}
            />
          )
        }
      >
        <ButtonWrapper size="small" type="primary" ghost>
          <InnerBtnWrapper>
            全部
            <FilterIcon />
          </InnerBtnWrapper>
        </ButtonWrapper>
      </Tooltip>
    </Wrapper>
  )
}

export default memo(CatFilterButton)
