/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/BaseStyled'

import { Item, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const menu = [
  {
    id: '0',
    title: '本周热议',
    icon: `${ICON_CMD}/navi_fire.svg`,
  },
  {
    id: '101',
    title: '酷工具 / 服务',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    // 非 IT，设计类的网站
    id: '103',
    title: '设计灵感',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '12',
    title: '酷团队',
    icon: `${ICON_CMD}/navi_group.svg`,
  },
  {
    id: '1',
    title: 'Github',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '17',
    title: '数据酷', // '趋势 / 报告',
    icon: `${ICON_CMD}/navi_glasses.svg`,
  },
  {
    id: '2',
    title: 'Podcast(播客)',
    icon: `${ICON_CMD}/navi_podcast.svg`,
  },
  {
    id: '3',
    title: '代码技巧',
    icon: `${ICON_CMD}/navi_tips.svg`,
  },
  {
    id: '4',
    title: '教程 / 资源', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    icon: `${ICON_CMD}/navi_translate.svg`,
  },
  {
    id: '41',
    title: 'IT 博物馆',
    icon: `${ICON_CMD}/navi_translate.svg`,
  },
  {
    id: '6',
    title: '计算机名人堂',
    icon: `${ICON_CMD}/navi_famous.svg`,
  },
  // {
  //   id: '7',
  //   title: '独立博客', // --> 转移到 值得关注
  //   icon: `${ICON_CMD}/navi_blog.svg`,
  // },
  {
    id: '8',
    title: '独立开发者',
    icon: `${ICON_CMD}/navi_hammer.svg`,
  },
  // {
  //   id: '9',
  //   title: '编辑器圣战',
  //   icon: `${ICON_CMD}/navi_jesus.svg`,
  // },
  {
    id: '10',
    title: '命令行',
    icon: `${ICON_CMD}/navi_shell.svg`,
  },
  {
    id: '11',
    title: '酷发明',
    icon: `${ICON_CMD}/navi_community.svg`,
  },
  // {
  //   id: '13',
  //   title: '客户端',
  //   icon: `${ICON_CMD}/navi_client.svg`,
  // },
  {
    id: '14',
    title: '值得订阅/关注', // 专栏，公众号，twitter, 微博 等等
    icon: `${ICON_CMD}/navi_subscribe.svg`,
  },
  // {
  //   id: '15',
  //   title: '中文文档',
  //   icon: `${ICON_CMD}/navi_eat.svg`,
  // },
  {
    id: '16',
    title: '影剧 / Talks',
    icon: `${ICON_CMD}/navi_movie.svg`,
  },
  {
    id: '18',
    title: '文体娱乐',
    icon: `${ICON_CMD}/navi_sport.svg`,
  },
]

/* <ActiveDot /> */
const RootMenu = ({ onSelect }) => {
  return (
    <React.Fragment>
      {menu.map(item => (
        <Item active={item.id === '0'} key={item.id} onClick={onSelect}>
          <Icon active={item.id === '0'} src={item.icon} />
          <SpaceGrow />
          {item.title}
        </Item>
      ))}
    </React.Fragment>
  )
}

RootMenu.propTypes = {
  onSelect: T.func.isRequired,
}

RootMenu.defaultProps = {}

export default React.memo(RootMenu)
