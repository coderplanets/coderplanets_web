import { FC, Fragment } from 'react'
import dynamic from 'next/dynamic'
import TimeAgo from 'timeago-react'

import Link from 'next/link'

import type { TCommunity, TPost } from '@/spec'
import { EVENT } from '@/constant'
import { send, changeToCommunity } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import DigestSentence from '@/widgets/DigestSentence'
// import CommunityCard from '@/widgets/Cards/CommunityCard'
// import UserCard from '@/widgets/Cards/UserCard'
import Tooltip from '@/widgets/Tooltip'
import GTDBadge from '@/widgets/GTDBadge'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  CommunityLabel,
  LabelDivider,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
  GTDBadgeWrapper,
} from '../styles/desktop_view/body'

const CommunityCard = dynamic(() => import('@/widgets/Cards/CommunityCard'), {
  ssr: false,
})

const UserCard = dynamic(() => import('@/widgets/Cards/UserCard'), {
  ssr: false,
})

const ActiveBadge = dynamic(() => import('./ActiveBadge'), {
  ssr: false,
})

type TProps = {
  curCommunity: TCommunity | null
  item: TPost
}

const Body: FC<TProps> = ({ item, curCommunity }) => {
  // console.log('# originalCommunity: ', originalCommunity)
  const { originalCommunity, author } = item
  const showOriginalCommunity =
    curCommunity === null || curCommunity.raw !== originalCommunity.raw

  return (
    <Wrapper>
      <Extra>
        <LeftPart>
          {showOriginalCommunity && (
            <Fragment>
              <Tooltip
                content={<CommunityCard item={originalCommunity} />}
                placement="right"
                delay={1500}
              >
                <CommunityLabel
                  onClick={() => changeToCommunity(originalCommunity.raw)}
                >
                  {originalCommunity.title}
                </CommunityLabel>
              </Tooltip>
              <LabelDivider />
            </Fragment>
          )}

          <Tooltip
            content={<UserCard item={author} />}
            placement="right"
            delay={500}
          >
            <Link href={`/u/${author.login}`} passHref>
              <AuthorName darker={showOriginalCommunity}>
                {author.nickname}
              </AuthorName>
            </Link>
          </Tooltip>

          <Dot radius={3} space={10} />
          <PublishTime>
            <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
          </PublishTime>
          <Dot radius={3} space={10} />
          <ItemWrapper>
            <ViewsIcon />
            {item.views}
          </ItemWrapper>
        </LeftPart>
        <SpaceGrow />

        <ActiveBadge item={item} />
        <GTDBadgeWrapper>
          <GTDBadge />
        </GTDBadgeWrapper>
      </Extra>

      <DigestSentence
        top={2}
        right={140}
        onPreview={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}
      >
        {item.digest}
      </DigestSentence>
    </Wrapper>
  )
}

export default Body
