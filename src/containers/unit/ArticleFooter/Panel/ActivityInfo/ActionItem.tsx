import { FC, memo } from 'react'

import type { TAccount, TArticle, TCommunity } from '@/spec'
import { ICON } from '@/config'

import ImgFallback from '@/widgets/ImgFallback'

import {
  Wrapper,
  IconBgWrapper,
  ActionIcon,
  MainInfo,
  AvatarIcon,
  UserName,
  ArticleTitle,
} from '../../styles/panel/activity_info/action_item'

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
    </Wrapper>
  )
}

export default memo(ActionItem)
