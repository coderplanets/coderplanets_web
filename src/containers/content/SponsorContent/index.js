//

/*
 *
 * SponsorContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import { Br } from '@/components/Common'
import { SponsorGallery } from '@/components/GalleryHub'

import Banner from './Banner'
import SponsorTypeTitle from './SponsorTypeTitle'

import { Wrapper, InnerWrapper, ContentWrapper, Footer } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const goldItems = [
  {
    id: '0',
    addr: 'xxx.com',
    title: 'javascript',
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
]

const items = [
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

const SponsorContentContainer = ({ sponsorContent: store }) => {
  useInit(store)

  const { bannerVisiable } = store

  return (
    <Wrapper testId="sponsor-content">
      <Banner />
      <InnerWrapper bannerVisiable={bannerVisiable}>
        <Br top="50px" />
        <SponsorTypeTitle title="金牌赞助" />
        <Br top="20px" />
        <SponsorGallery items={goldItems} column={4} />
        <ContentWrapper>
          <SponsorTypeTitle title="温情赞助" type="heart" />
          <Br top="50px" />
          <SponsorGallery items={items} column={4} />
        </ContentWrapper>
        <Footer>以上名单按投放时间排序</Footer>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(SponsorContentContainer)
