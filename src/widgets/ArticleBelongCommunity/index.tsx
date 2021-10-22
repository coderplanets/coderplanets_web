import { FC, memo } from 'react'
import { filter } from 'ramda'

import type { TArticle, TCommunity } from '@/spec'
import { HCN } from '@/constant'

import FollowButton from '@/widgets/Buttons/FollowButton'
import MirrorHint from './MirrorHint'

import { Wrapper, HomeLogo, Icon, Name, JoinDesc } from './styles'

type TProps = {
  article: TArticle
}

const ArticleBelongCommunity: FC<TProps> = ({ article }) => {
  const hasFollowed = true
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
      <Name>{oc.title}</Name>
      <JoinDesc>{oc.subscribersCount} 人加入</JoinDesc>
      <FollowButton
        size="tiny"
        hasFollowed={hasFollowed}
        followingOffset={-6}
      />
    </Wrapper>
  )
}

export default memo(ArticleBelongCommunity)
