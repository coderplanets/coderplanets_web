import React from 'react'

import EmptyLabel from '@components/EmptyLabel'

import CategoryCardList from './CategoryCardList'

import { Wrapper, MsgWrapper } from './styles/box_view'

const BoxView = ({ data, onSelect }) => {
  const { totalCount } = data

  return (
    <Wrapper>
      {totalCount === 0 ? (
        <MsgWrapper>
          <EmptyLabel text="你还没有任何收藏夹" size="large" />
        </MsgWrapper>
      ) : (
        <CategoryCardList data={data} onSelect={onSelect} />
      )}
    </Wrapper>
  )
}

export default BoxView
