import { FC, memo, useCallback } from 'react'
import Router from 'next/router'
import { isMobile } from 'react-device-detect'

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
  const gotoArticle = useCallback(() => {
    Router.push(`/${thread}/${data.id}`)
  }, [data.id, thread])

  switch (thread) {
    case ARTICLE_THREAD.RADAR: {
      const { title, articleTags, linkAddr } = data as TRadar

      return (
        <Wrapper>
          <LinkWraper>
            {/* <LinkIcon src={`${ICON}/social/twitter-share.png`} /> */}
            <LinkIcon />
            <LinkSrc>{linkAddr}</LinkSrc>
          </LinkWraper>
          <Br top={4} />
          <Title onClick={gotoArticle}>{cutRest(title, 100)}</Title>
          <Br top={6} />
          <TagsList items={articleTags} size={isMobile ? 'small' : 'medium'} />
        </Wrapper>
      )
    }

    default: {
      const { title, articleTags, company, companyLink } = data as TJob

      return (
        <Wrapper>
          <TagsList items={articleTags} size={isMobile ? 'small' : 'small'} />
          <Br top={isMobile ? '4px' : '10px'} />
          {!isMobile && (
            <ExtraInfo>
              <CompanyLink href={companyLink} target="_blank">
                {cutRest(company, 12)}
              </CompanyLink>
            </ExtraInfo>
          )}
          <Title onClick={gotoArticle}>{cutRest(title, 100)}</Title>
        </Wrapper>
      )
    }
  }
}

export default memo(Header)
