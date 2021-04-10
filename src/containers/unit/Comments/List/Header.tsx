import React from 'react'

import Filter from '../CommentsFilter'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
} from '../styles/list/header'

type TProps = {
  totalCount: number
  filterType: string
}

const Header: React.FC<TProps> = ({ totalCount, filterType }) => {
  return (
    <Wrapper>
      <TotalCountWrapper>
        {totalCount > 0 && (
          <TotalTitle id="lists-info">
            共收到 <TotalNum>{totalCount}</TotalNum> 条评论:
          </TotalTitle>
        )}
      </TotalCountWrapper>
      <Filter filterType={filterType} show={totalCount >= 2} />
    </Wrapper>
  )
}

export default React.memo(Header)
