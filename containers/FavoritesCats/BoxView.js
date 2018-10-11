import React from 'react'

import { EmptyLabel } from '../../components'

import { Wrapper, MsgWrapper } from './styles/box_view'

import CategoryCardList from './CategoryCardList'

const BoxView = ({ data, onEdit, onPageChange }) => {
  const { totalCount } = data

  return (
    <Wrapper>
      {totalCount === 0 ? (
        <MsgWrapper>
          <EmptyLabel text="你还没有任何收藏夹" size="large" />
        </MsgWrapper>
      ) : (
        <CategoryCardList
          data={data}
          onEdit={onEdit}
          onPageChange={onPageChange}
        />
      )}
    </Wrapper>
  )
}

export default BoxView
