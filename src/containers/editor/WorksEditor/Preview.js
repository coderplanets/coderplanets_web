import React from 'react'

// import { ICON_BASE } from '@/config'
import WorksCard from '@/components/WorksCard'

import { Wrapper } from './styles/preview'

const item = {
  // cover: `${ASSETS_ENDPOINT}/works/market1.jpeg`,
  title: '作品名称',
  desc: '作品简介',
  tag: {
    title: '协作工具',
  },
  platform: {
    title: '网站',
  },
  // techStack: [
  //   {
  //     raw: 'javascript',
  //     icon: `${ICON_BASE}/pl/javascript.svg`,
  //   },
  //   {
  //     raw: 'java',
  //     icon: `${ICON_BASE}/pl/java.svg`,
  //   },
  //   {
  //     raw: 'elixir',
  //     icon: `${ICON_BASE}/pl/elxiir.svg`,
  //   },
  //   {
  //     raw: 'ruby',
  //     icon: `${ICON_BASE}/pl/ruby.svg`,
  //   },
  // ],
  upvote: 99,
  commentsCount: 99,
  insertedAt: '',
  // isOpenSource: true,
}

const Preview = () => {
  return (
    <Wrapper>
      <WorksCard item={item} mode="preview" withBg />
    </Wrapper>
  )
}

export default React.memo(Preview)
