/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'
import { TYPE } from '@/constant'

import NaviButton from '../NaviButton'
import { Wrapper, Title } from '../styles/more_menu'
import { openMenu } from '../logic'

const menus = [
  {
    icon: `${ICON}/article/collect.svg`,
    title: '收藏夹',
    menu: TYPE.MM_TYPE.COLLECT,
  },
  {
    icon: `${ICON}/article/report.svg`,
    title: '举报',
    menu: TYPE.MM_TYPE.REPORT,
  },
]

type TProps = {
  article: TArticle
}

const ArticleLayout: FC<TProps> = ({ article }) => {
  const { author } = article
  const menuItems = [
    ...menus,
    {
      icon: author.avatar,
      title: author.nickname,
      menu: '-',
      type: 'avatar',
      desc: '(作者)',
    },
  ]

  return (
    <Wrapper>
      {menuItems.map((item) => (
        <Title key={item.menu} onClick={() => openMenu(item.menu)}>
          <NaviButton {...item} />
        </Title>
      ))}
    </Wrapper>
  )
}

export default memo(ArticleLayout)
