//

/*
 *
 * FriendsContent
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import { Br } from '@/components/Common'
import { SponsorGallery } from '@/components/GalleryHub'
import { Button } from '@/components/Buttons'

import { Wrapper, InnerWrapper, Title, Desc, HeartIcon } from './styles'
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

const FriendsContentContainer = ({ friendsContent: store }) => {
  useInit(store)

  return (
    <Wrapper testid="friends-content">
      <InnerWrapper>
        <Br top="50px" />
        <Title>友情链接</Title>
        <Desc>感谢以下公司（团队）对本站的信任</Desc>
        <Br top="50px" />
        <SponsorGallery items={items} column={4} />
        <Br top="80px" />
        <Button type="primary" ghost>
          <HeartIcon src={`${ICON_CMD}/navi/heart.svg`} />
          交换友情链接
        </Button>
        <Br top="120px" />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(FriendsContentContainer)
