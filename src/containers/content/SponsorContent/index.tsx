//

/*
 *
 * SponsorContent
 *
 */

// import { FC } from 'react'
import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import { ASSETS_ENDPOINT } from '@/config'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { Br } from '@/widgets/Common'
import { SponsorGallery } from '@/widgets/GalleryHub'

import type { TStore } from './store'

import Banner from './Banner'
import SponsorTypeTitle from './SponsorTypeTitle'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  DonateTitle,
  DonateWrapper,
  RealDonateAvatar,
  DonateAvatar,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const goldItems = [
  {
    id: '0',
    addr: 'https://www.xaudiopro.com/cn/',
    cover: `${ASSETS_ENDPOINT}/sponsor/c/xaudiopro.png`,
    title: 'xAudioPro',
    desc: '基于 WebAudio/WebAssembly 的在线音频实时剪辑转码工具，兼具专业化与便携化，能快捷高效地完成音频的常规剪辑操作及在线实时转码。',
  },
  {
    id: '1',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
  {
    id: '2',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
  {
    id: '3',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
]

const items = [
  {
    id: '0',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
  {
    id: '1',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
  {
    id: '2',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
  {
    id: '3',
    addr: 'https://your-brand.com',
    title: '空缺中',
    desc: '赞助后你的品牌同时将出现在这里以及本项目的 Github 主页。',
  },
]

type TProps = {
  sponsorContent?: TStore
  testid?: string
  metric?: TMetric
}

const SponsorContentContainer: FC<TProps> = ({
  sponsorContent: store,
  testid = 'sponsor-content',
  metric,
}) => {
  useInit(store)
  const { bannerVisiable } = store

  return (
    <Wrapper testid={testid}>
      <Banner />
      <InnerWrapper bannerVisiable={bannerVisiable}>
        <Br top={50} />
        <SponsorTypeTitle title="天使赞助" />
        <Br top={isMobile ? 20 : 45} />
        <SponsorGallery items={goldItems} level="gold" />
        <Br top={isMobile ? 45 : 0} />
        <ContentWrapper metric={metric}>
          <SponsorTypeTitle title="友情赞助" type="heart" />
          <Br top={isMobile ? 15 : 50} />
          <SponsorGallery items={items} level="silver" />
        </ContentWrapper>
        <DonateTitle>感谢以下个人热心打赏</DonateTitle>
        <DonateWrapper>
          <RealDonateAvatar
            src={`${ASSETS_ENDPOINT}/sponsor/u/wx_shangui.png`}
          />
          <DonateAvatar>t</DonateAvatar>
          <DonateAvatar>h</DonateAvatar>
          <DonateAvatar>a</DonateAvatar>
          <DonateAvatar>n</DonateAvatar>
          <DonateAvatar>k</DonateAvatar>
          <DonateAvatar>s</DonateAvatar>
          <DonateAvatar>!</DonateAvatar>
        </DonateWrapper>
        <DonateTitle>
          因为邮件地址原因，之前打赏的用户无法全部联系，如果你之前打赏过网站并且愿意出现在这个列表中，还请联系
          coderplanets@outlook.com，感激在心。
        </DonateTitle>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(SponsorContentContainer, 'sponsorContent') as FC<TProps>
