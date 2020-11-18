import React from 'react'

import { ICON, ICON_BASE } from '@/config'

import ImgFallback from '@/components/ImgFallback'

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

const ActionItem = ({ item: { author, article, community, insertedAt } }) => {
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

export default React.memo(ActionItem)
