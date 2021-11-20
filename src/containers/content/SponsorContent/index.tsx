//

/*
 *
 * SponsorContent
 *
 */

// import { FC } from 'react'
import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

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
  DonateAvatar,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const goldItems = [
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
        <Br top={45} />
        <SponsorGallery items={goldItems} level="gold" />
        <ContentWrapper metric={metric}>
          <SponsorTypeTitle title="友情赞助" type="heart" />
          <Br top={50} />
          <SponsorGallery items={items} level="silver" />
        </ContentWrapper>
        <DonateTitle>感谢各位好心人热心打赏</DonateTitle>
        <DonateWrapper>
          <DonateAvatar>t</DonateAvatar>
          <DonateAvatar>h</DonateAvatar>
          <DonateAvatar>a</DonateAvatar>
          <DonateAvatar>n</DonateAvatar>
          <DonateAvatar>k</DonateAvatar>
          <DonateAvatar>s</DonateAvatar>
          <DonateAvatar>!</DonateAvatar>
        </DonateWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(SponsorContentContainer)
