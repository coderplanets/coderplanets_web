/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, memo } from 'react'

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
    menu: '2',
  },
  {
    icon: `${ICON}/pulse.svg`,
    title: '关于作者',
    menu: '3',
  },
]

const MoreMenu: FC = () => {
  return (
    <Wrapper>
      {menus.map((item) => (
        <Title key={item.menu} onClick={() => openMenu(item.menu)}>
          <NaviButton item={item} />
        </Title>
      ))}
    </Wrapper>
  )
}

export default memo(MoreMenu)
