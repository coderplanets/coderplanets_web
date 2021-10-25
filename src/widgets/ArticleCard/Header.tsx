import { FC, memo } from 'react'

import type { TJob, TRadar } from '@/spec'
import { ICON } from '@/config'
import { THREAD } from '@/constant'
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
    case THREAD.RADAR: {
      const { title, articleTags, linkAddr } = data as TRadar

      return (
        <Wrapper>
          <LinkWraper>
            {/* <LinkIcon src={`${ICON}/shape/link.svg`} /> */}
            <LinkIcon src={`${ICON}/social/twitter-share.png`} />
            <LinkSrc>{linkAddr}</LinkSrc>
          </LinkWraper>
          <Br top={4} />
          <Title>{cutRest(title, 100)}</Title>
          <Br top={6} />
          <TagsList items={articleTags} mLeft={0} size="medium" />
        </Wrapper>
      )
    }

    default: {
      const { title, articleTags, company, companyLink } = data as TJob

      return (
        <Wrapper>
          <TagsList items={articleTags} mLeft={0} size="medium" />
          <Br top={10} />
          <Title>
            <ExtraInfo>
              <CompanyLink href={companyLink} target="_blank">
                {cutRest(company, 12)}
              </CompanyLink>
            </ExtraInfo>
            {cutRest(title, 100)}
          </Title>
        </Wrapper>
      )
    }
  }
}

export default memo(Header)
