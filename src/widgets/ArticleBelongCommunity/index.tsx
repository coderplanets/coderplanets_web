import { FC, memo } from 'react'
import { filter } from 'ramda'
import Link from 'next/link'

import type { TArticle, TCommunity } from '@/spec'
import { HCN } from '@/constant'

import FollowButton from '@/widgets/Buttons/FollowButton'
import MirrorHint from './MirrorHint'

import { Wrapper, HomeLogo, Icon, Name, JoinDesc } from './styles'

type TProps = {
  article: TArticle
  onFollow: () => void
  onUndoFollow: () => void
}

const ArticleBelongCommunity: FC<TProps> = ({
  article,
  onFollow,
  onUndoFollow,
}) => {
  const { originalCommunity: oc, communities } = article

  // @ts-ignore
  const mirrorCommunities = filter((c) => c.id !== oc.id, communities)
  const hasMirror = mirrorCommunities.length > 0

  return (
    <Wrapper>
      {oc.raw === HCN ? <HomeLogo /> : <Icon src={oc.logo} />}
      {hasMirror && (
        <MirrorHint communities={mirrorCommunities as TCommunity[]} />
      )}
      <Link href={`/${oc.raw}`} passHref>
        <Name>{oc.title}</Name>
      </Link>
      <JoinDesc>{oc.subscribersCount} 人加入</JoinDesc>
      <FollowButton
        size="tiny"
        hasFollowed={oc.raw !== HCN ? oc.viewerHasSubscribed : true}
        followingOffset={-6}
        onFollow={onFollow}
        onUndoFollow={() => {
          if (oc.raw === HCN) return
          onUndoFollow()
        }}
      />
    </Wrapper>
  )
}

export default memo(ArticleBelongCommunity)
