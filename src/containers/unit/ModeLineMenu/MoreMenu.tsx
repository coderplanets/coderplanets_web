import { FC, memo } from 'react'

import { ICON } from '@/config'

import NaviButton from './NaviButton'
import { Wrapper } from './styles/more_menu'

const menus = [
  {
    icon: `${ICON}/magic-stick.svg`,
    title: '自定义',
    raw: 'setting',
  },
  {
    icon: `${ICON}/search.svg`,
    title: '搜索',
    raw: 'search',
  },
  {
    icon: `${ICON}/pulse.svg`,
    title: '统计',
    raw: 'analysis',
  },
  {
    // 双击回到页头等等, 长按管理等等
    icon: `${ICON}/help.svg`,
    title: '帮助',
    raw: 'help',
  },
]

const MoreMenu: FC = () => {
  return (
    <Wrapper>
      {menus.map((item) => (
        <NaviButton key={item.raw} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(MoreMenu)
