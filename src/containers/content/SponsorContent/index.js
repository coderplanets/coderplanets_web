//

/*
 *
 * SponsorContent
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import { Margin } from '@components/BaseStyled'
import Tabs from '@components/Tabs'
import { SponsorGallery } from '@components/GalleryHub'
import { Button } from '@components/Buttons'

import {
  Wrapper,
  InnerWrapper,
  TabsWrapper,
  Title,
  Desc,
  HeartIcon,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const goldItems = [
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

const SponsorContentContainer = ({ sponsorContent }) => {
  useInit(sponsorContent)

  return (
    <Wrapper testid="sponsorContent">
      <InnerWrapper>
        <TabsWrapper>
          <Tabs
            items={[
              {
                title: '赞助鸣谢',
                icon: `${ICON_CMD}/header/more_sponsor.svg`,
                raw: 'sponsor',
              },
              {
                title: '广告投放',
                icon: `${ICON_CMD}/header/more_invest.svg`,
                raw: 'ad',
              },
            ]}
            activeKey="sponsor"
            // onChange={onChange}
            slipHeight="1px"
          />
        </TabsWrapper>
        <Margin top="50px" />
        <Title>特别赞助</Title>
        <Desc>感谢以下公司（团队）对社区的特别支持</Desc>
        <Margin top="20px" />
        <SponsorGallery items={goldItems} column={4} />
        <Title>赞助商</Title>
        <Desc>感谢以下公司（团队）对社区的支持</Desc>
        <Margin top="50px" />
        <SponsorGallery items={items} column={4} />
        <Margin top="80px" />
        <Button type="primary" ghost>
          <HeartIcon src={`${ICON_CMD}/navi/heart.svg`} />
          成为本站赞助商
        </Button>
        <Margin top="120px" />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(SponsorContentContainer)
