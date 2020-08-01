import React from 'react'
import Link from 'next/link'

import { cutFrom } from '@/utils'

import {
  Wrapper,
  EmptyCard,
  EmptyTitle,
  EmptyDesc,
  IssueLink,
  SearchValueFocus,
} from './styles/not_found'

const NotFound = ({ searchValue }) => {
  return (
    <Wrapper>
      <EmptyCard>
        <EmptyTitle>
          没有找到包含{' '}
          <SearchValueFocus>{cutFrom(searchValue, 10)}</SearchValueFocus> 的社区
        </EmptyTitle>
        <EmptyDesc>
          若没有你感兴趣的社区, 你可以
          <Link href="/communities/new" passHref>
            <IssueLink>参与创建</IssueLink>
          </Link>
        </EmptyDesc>
      </EmptyCard>
    </Wrapper>
  )
}

export default React.memo(NotFound)
