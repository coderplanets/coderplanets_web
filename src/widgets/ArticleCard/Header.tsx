import { FC, memo } from 'react'
import Link from 'next/link'

import type { TJob, TRadar } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'
import { cutRest } from '@/utils/helper'
import TagsList from '@/widgets/TagsList'
import { Br } from '@/widgets/Common'

import type { TProps as TIndex } from './index'
import {
  Wrapper,
  LinkWraper,
  LinkIcon,
  LinkSrc,
  Title,
  ExtraInfo,
  CompanyLink,
} from './styles/header'

const Header: FC<TIndex> = ({ data, thread }) => {
  switch (thread) {
    case ARTICLE_THREAD.RADAR: {
      const { id, title, articleTags, linkAddr } = data as TRadar

      return (
        <Wrapper>
          <LinkWraper>
            {/* <LinkIcon src={`${ICON}/social/twitter-share.png`} /> */}
            <LinkIcon />
            <LinkSrc>{linkAddr}</LinkSrc>
          </LinkWraper>
          <Br top={4} />
          <Link href={`/${ARTICLE_THREAD.RADAR}/${id}`} passHref>
            <Title>{cutRest(title, 100)}</Title>
          </Link>
          <Br top={6} />
          <TagsList items={articleTags} mLeft={0} size="medium" />
        </Wrapper>
      )
    }

    default: {
      const { id, title, articleTags, company, companyLink } = data as TJob

      return (
        <Wrapper>
          <TagsList items={articleTags} mLeft={0} size="medium" />
          <Br top={10} />

          <ExtraInfo>
            <CompanyLink href={companyLink} target="_blank">
              {cutRest(company, 12)}
            </CompanyLink>
          </ExtraInfo>
          <Link href={`/${ARTICLE_THREAD.JOB}/${id}`} passHref>
            <Title>{cutRest(title, 100)}</Title>
          </Link>
        </Wrapper>
      )
    }
  }
}

export default memo(Header)
