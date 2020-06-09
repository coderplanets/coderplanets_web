/*
 *
 * FaqPeekList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import Post from './Post'
import {
  Wrapper,
  ArrowIcon,
  ContentWrapper,
  Title,
  ListWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FaqPeekList:index')

const items = [
  {
    id: '0',
    title: '这是一个什么社区？',
  },
  {
    id: '1',
    title: '全球疫情催生了很多断章取义的新闻',
  },
  {
    id: '2',
    title: '在哪里可以下载到 iOS 版本的安装包?',
  },
  {
    id: '3',
    title: '后续会有更多的作品吗',
  },
  {
    id: '4',
    title: '太喜欢这个社区了，不知道',
  },
]

const FaqPeekList = ({ active }) => {
  return (
    <Wrapper testid="faqPeekList" active={active}>
      {active && <ArrowIcon src={`${ICON_CMD}/peek-arrow.svg`} />}
      <ContentWrapper active={active}>
        <Title>常见问题：</Title>

        <ListWrapper>
          {items.map((item) => (
            <Post key={item.id} item={item} />
          ))}
        </ListWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

FaqPeekList.propTypes = {
  active: T.bool,
}

FaqPeekList.defaultProps = {
  active: false,
}

export default React.memo(FaqPeekList)
