/*
 *
 * ProductGallery
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty } from 'ramda'

import { ICON } from '@/config'
import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import ArrowButton from '@/components/Buttons/ArrowButton'

import IconText from '@/components/IconText'
import InlineTags from './InlineTags'

import {
  Wrapper,
  Block,
  Header,
  LinkHead,
  LinkerWrapper,
  IntroHead,
  Icon,
  Title,
  Desc,
  Footer,
} from './styles/product_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ProductGallery:index')

const tmpItems = [
  {
    id: '0',
    addr: 'coderplanets.com',
    title: 'javascript',
    // desc: '最性感的开发者社区',
    tags: ['最性感', '开发者', '更好运'],
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '1',
    addr: 'elixir.com',
    title: 'elixir',
    // desc: '最性感的开发者社区',
    tags: ['最性感1', '开发者', '更好运1', '最性感2', '开发者2', '更好运2'],
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
  {
    id: '2',
    addr: 'clojure-lang.com',
    title: 'clojure',
    desc:
      '最性感的开发者社区少数派致力于更好地运用数字产品或科学方法,帮助用户提升工作效率和生活品质.',
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

const ProductGallery = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
        >
          <Header>
            <LinkHead>
              <div>{item.addr}</div>
              <LinkerWrapper>
                <ArrowButton size="tiny">直接访问</ArrowButton>
              </LinkerWrapper>
            </LinkHead>
            <IntroHead>
              <Icon src={item.icon} />
              <Title>{item.title}</Title>
            </IntroHead>
          </Header>

          {item.desc && <Desc>{cutRest(item.desc, 50)}</Desc>}
          {!item.desc && !isEmpty(item.tags) && (
            <InlineTags items={item.tags} />
          )}

          <Footer>
            <IconText iconSrc={`${ICON}/shape/vote-up.svg`}>22</IconText>
            <IconText iconSrc={`${ICON}/shape/vote-up.svg`}>22</IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

ProductGallery.propTypes = {
  items: T.arrayOf(T.object),
}

ProductGallery.defaultProps = {
  items: tmpItems,
}

export default React.memo(ProductGallery)
