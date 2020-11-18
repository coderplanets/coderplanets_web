//

/*
 *
 * FriendsContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import { Br } from '@/components/Common'
import { FriendsGallery } from '@/components/GalleryHub'
import { ArrowLink } from '@/components/Buttons'

import {
  Wrapper,
  InnerWrapper,
  FriendsWrapper,
  Title,
  Divider,
  Footer,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:FriendsContent')

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

const FriendsContentContainer = ({ friendsContent: store, metric }) => {
  useInit(store)

  const linkColors = {
    color: '#0D729D',
    hoverColor: '#0D729D',
  }

  return (
    <Wrapper testId="friends-content">
      <InnerWrapper metric={metric}>
        <Br top={40} />
        <Title>友情链接</Title>
        <Divider />
        {/* <Desc>感谢以下公司（团队）对本站的信任</Desc> */}
        <Br top={50} />
        <FriendsWrapper>
          <FriendsGallery items={items} column={5} />
        </FriendsWrapper>
        <Footer>
          <ArrowLink {...linkColors}>交换链接</ArrowLink>
        </Footer>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(FriendsContentContainer)
