/*
 *
 * FaqPeekList
 *
 */

import React, { useState, useEffect } from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import LinksCard from '@/widgets/LinksCard'

import { Wrapper, ArrowIcon, ContentWrapper } from './styles'

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
]

const FaqPeekList = ({ active }) => {
  const [showContent, setShowContent] = useState(false)

  // wait for expand animation to finish
  useEffect(() => {
    active ? setTimeout(() => setShowContent(true), 150) : setShowContent(false)
  }, [active])

  return (
    <Wrapper testid="faqPeekList" active={active}>
      {active && <ArrowIcon src={`${ICON}/shape/arrow-solid.svg`} />}
      <ContentWrapper active={showContent}>
        <LinksCard
          title="安装使用"
          items={items}
          onSelect={log}
          bottom={0}
          left={5}
          right={24}
        />

        <LinksCard
          title="常见问题"
          items={items}
          onSelect={log}
          bottom={0}
          left={5}
          right={24}
        />
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
