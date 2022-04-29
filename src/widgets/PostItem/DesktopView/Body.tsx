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
import ViewsCount from './ViewsCount'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  CommunityLabel,
  LabelDivider,
  AuthorName,
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
                //  @ts-ignore
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
            //  @ts-ignore
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
          <ViewsCount count={item.views} />
        </LeftPart>
        <SpaceGrow />

        {/*  @ts-ignore */}
        <ActiveBadge item={item} />
        <GTDBadgeWrapper>
          {item.id === '239' && <GTDBadge type="FEATURE" />}
          {item.id === '231' && <GTDBadge type="BUG" />}
          {item.id === '227' && <GTDBadge type="BUG" state="TODO" />}
          {item.id === '228' && <GTDBadge type="FEATURE" state="WIP" />}
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
