/*
 *
 * SponsorGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { ASSETS_ENDPOINT } from '@config'
import { buildLog, cutFrom } from '@utils'

import { ArrowButton } from '@components/Buttons'

import {
  Wrapper,
  Block,
  Header,
  IntroHead,
  Icon,
  Title,
  IntroImg,
  Desc,
  LinkWrapper,
} from './styles/sponsor_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:SponsorGallery:index')

const tmpItems = [
  {
    id: '0',
    addr: 'xxx.com',
    title: '坚果云',
    desc: '最性感的开发者社区',
    level: 'gold',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '1',
    addr: 'elixir.com',
    title: 'elixir',
    desc: '最性感的开发者社区',
    level: 'gold',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
  {
    id: '2',
    addr: 'clojure-lang.com',
    title: 'clojure',
    desc:
      '最性感的开发者社区少数派致力于更好地运用数字产品或科学方法,帮助用户提升工作效率和生活品质.',
    level: 'gold',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/clojure.png',
  },
  {
    id: '3',
    addr: 'javascript.com',
    title: 'Teambition',
    desc:
      '一切工作都可以从Teambition开始。无论是策划活动、研发软件、制造机器人、建设发电站或者发射卫星,团队成员以更高效的协作方式,为目标不断创造成果。',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '4',
    addr: 'sspai.com',
    title: '少数派',
    desc:
      '少数派致力于更好地运用数字产品或科学方法,帮助用户提升工作效率和生活品质.',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/editor/embeds/shaoshupai.png',
  },
  {
    id: '5',
    addr: 'whatthefuck.com',
    title: 'whatever',
    desc:
      '一切工作都可以从Teambition开始。无论是策划活动、研发软件、制造机器人、建设发电站或者发射卫星,团队成员以更高效的协作方式,为目标不断创造成果。',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/clojure.png',
  },
  {
    id: '6',
    addr: 'javascript.com',
    title: 'Teambition',
    desc:
      '一切工作都可以从Teambition开始。无论是策划活动、研发软件、制造机器人、建设发电站或者发射卫星,团队成员以更高效的协作方式,为目标不断创造成果。',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '7',
    addr: 'sspai.com',
    title: '少数派',
    desc:
      '少数派致力于更好地运用数字产品或科学方法,帮助用户提升工作效率和生活品质.',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/editor/embeds/shaoshupai.png',
  },
  {
    id: '8',
    addr: 'whatthefuck.com',
    title: 'whatever',
    desc: '最性感的开发者社区',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/clojure.png',
  },
  {
    id: '9',
    addr: 'sspai.com',
    title: '少数派',
    desc:
      '少数派致力于更好地运用数字产品或科学方法,帮助用户提升工作效率和生活品质.',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/editor/embeds/shaoshupai.png',
  },
]

const SponsorGallery = ({ items, column }) => {
  return (
    <Wrapper center={items.length < column}>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
          level={item.level}
          column={column}
        >
          <Header>
            <IntroHead>
              <Title level={item.level}>{item.title}</Title>
              <Icon src={item.icon} />
            </IntroHead>
          </Header>
          {item.level === 'gold' && (
            <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
          )}
          {item.desc && (
            <Desc level={item.level}>{cutFrom(item.desc, 30)}</Desc>
          )}
          <LinkWrapper>
            <ArrowButton size="tiny">{item.addr}</ArrowButton>
          </LinkWrapper>
        </Block>
      ))}
    </Wrapper>
  )
}

SponsorGallery.propTypes = {
  items: T.arrayOf(T.object),
  column: T.oneOf([3, 4]),
}

SponsorGallery.defaultProps = {
  items: tmpItems,
  column: 3,
}

export default React.memo(SponsorGallery)
