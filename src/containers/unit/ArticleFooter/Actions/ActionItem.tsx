import { FC, memo } from 'react'

import type { TAccount, TArticle, TCommunity } from '@/spec'
import { ICON, ICON_BASE } from '@/config'

import ImgFallback from '@/widgets/ImgFallback'

import {
  Wrapper,
  IconBgWrapper,
  ActionIcon,
  MainInfo,
  AvatarIcon,
  UserName,
  ArticleTitle,
  CommunityIcon,
} from '../styles/actions/action_item'

type TProps = {
  item: {
    author: TAccount
    article: TArticle
    community: TCommunity
    insertedAt: string
  }
}

const ActionItem: FC<TProps> = ({
  item: { author, article, community, insertedAt },
}) => {
  return (
    <Wrapper>
      <MainInfo>
        <IconBgWrapper>
          <ActionIcon src={`${ICON}/article/reference-action.svg`} />
        </IconBgWrapper>
        <AvatarIcon
          src={author.avatar}
          fallback={
            <ImgFallback user={author} size={14} bottom={2} right={10} />
          }
        />
        <UserName>{author.nickname}</UserName> {insertedAt}在:{' '}
        <ArticleTitle>{article.title}</ArticleTitle>
        中提及本帖
      </MainInfo>
      <CommunityIcon src={`${ICON_BASE}/pl/${community.raw}.svg`} />
    </Wrapper>
  )
}

export default memo(ActionItem)
