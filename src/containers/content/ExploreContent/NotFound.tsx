import { FC, memo } from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'
import { cutRest } from '@/utils/helper'

import {
  Wrapper,
  EmptyCard,
  EmptyTitle,
  EmptyDesc,
  IssueLink,
  SearchValueFocus,
} from './styles/not_found'

type TProps = {
  searchValue: string
}

const NotFound: FC<TProps> = ({ searchValue }) => {
  return (
    <Wrapper>
      <EmptyCard>
        <EmptyTitle>
          没有找到包含{' '}
          <SearchValueFocus>{cutRest(searchValue, 10)}</SearchValueFocus> 的社区
        </EmptyTitle>
        <EmptyDesc>
          若没有你感兴趣的社区, 你可以
          <Link href={`/${ROUTE.APPLY_COMMUNITY}`} passHref>
            <IssueLink>参与创建</IssueLink>
          </Link>
        </EmptyDesc>
      </EmptyCard>
    </Wrapper>
  )
}

export default memo(NotFound)
