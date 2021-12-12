/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON, GITHUB } from '@/config'

import NaviButton from './NaviButton'
import { Wrapper, A } from './styles/more_menu'

const menus = [
  {
    icon: `${ICON}/social/ear.svg`,
    title: '反馈',
    raw: 'feedback',
    link: '/feedback',
    target: '_self',
  },
  {
    icon: `${ICON}/social/github.svg`,
    title: 'Github',
    raw: 'github',
    link: `${GITHUB}`,
  },
  {
    icon: `${ICON}/pulse.svg`,
    title: '访问统计',
    raw: 'analysis',
    link: 'https://plausible.io/coderplanets.com',
  },
  {
    // 双击回到页头等等, 长按管理等等
    icon: `${ICON}/help.svg`,
    title: '帮助',
    raw: 'help',
    link: '/feedback',
  },
]

const MoreMenu: FC = () => {
  return (
    <Wrapper>
      {menus.map((item) => (
        <Link key={item.raw} href={item.link} passHref>
          <A target={item.target || '_blank'}>
            <NaviButton item={item} />
          </A>
        </Link>
      ))}
    </Wrapper>
  )
}

export default memo(MoreMenu)
