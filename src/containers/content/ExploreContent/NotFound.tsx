import { FC, memo } from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import {
  Wrapper,
  EmptyCard,
  EmptyTitle,
  EmptyDesc,
  IssueLink,
} from './styles/not_found'

type TProps = {
  searchValue: string
}

const NotFound: FC<TProps> = ({ searchValue }) => {
  return (
    <Wrapper>
      <EmptyCard>
        <EmptyTitle>没有找到相关社区</EmptyTitle>
        <EmptyDesc>
          若没有你感兴趣的社区, 欢迎
          <Link href={`/${ROUTE.APPLY_COMMUNITY}`} passHref>
            <IssueLink>参与创建</IssueLink>
          </Link>
        </EmptyDesc>
      </EmptyCard>
    </Wrapper>
  )
}

export default memo(NotFound)
