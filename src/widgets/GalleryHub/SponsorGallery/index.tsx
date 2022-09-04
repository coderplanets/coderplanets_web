/*
 *
 * SponsorGallery
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Linker from '@/widgets/Linker'

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
} from '../styles/sponsor_gallery'

/* eslint-disable-next-line */
const log = buildLog('w:SponsorGallery:index')

const Patterns = dynamic(() => import('./Patterns'), {
  /* eslint-disable react/display-name */
  // loading: () => <SloganTextWrapper>心爱的作品</SloganTextWrapper>,
  ssr: false,
})

type TProps = {
  items: {
    id: string
    title: string
    addr: string
    desc: string
    icon?: string
    cover?: string
  }[]
  level?: 'gold' | 'silver'
}

const SponsorGallery: FC<TProps> = ({ items, level = 'gold' }) => {
  return (
    <Wrapper center={level === 'gold'}>
      {items.map((item, index) => (
        <Block key={item.id} level={level}>
          <Header>
            <IntroHead>
              <Title level={level}>{item.title}</Title>
              {level === 'silver' && !isMobile && <Icon />}
            </IntroHead>
          </Header>
          {/* @ts-ignore */}
          {level === 'gold' && !item.cover && <Patterns index={index} />}
          {level === 'gold' && item.cover && <IntroImg src={item.cover} />}
          {item.desc && <Desc level={level}>{cutRest(item.desc, 30)}</Desc>}
          {!isMobile && (
            <LinkWrapper>
              <Linker src={item.addr} left={-5} />
            </LinkWrapper>
          )}
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(SponsorGallery)
