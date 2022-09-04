/*
 *
 * FamePeopleList
 *
 */

import { FC, memo } from 'react'

import type { TGallery } from '@/spec'
import { ICON, ASSETS_ENDPOINT } from '@/config'
import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import IconText from '@/widgets/IconText'

import { mockDevelopers } from '../mock'
import CardHeader from './CardHeader'

import {
  Wrapper,
  Block,
  Body,
  Intro,
  SocialWrapper,
  Avatar,
  Title,
  Digest,
  WorksWrapper,
  WorkIcon,
  Footer,
} from '../styles/people_gallery/developer_gallery'

/* eslint-disable-next-line */
const log = buildLog('w:ProductGallery:index')

type TProps = {
  items?: TGallery[]
}

const DeveloperGallery: FC<TProps> = ({ items = mockDevelopers() }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 3}
          borderRight={(index + 1) % 4 !== 0}
        >
          <CardHeader item={item} />
          <Body>
            <Avatar src={item.icon} />
            <Intro>
              <Title>{cutRest(item.title, 18)}</Title>
              <Digest>{cutRest(item.desc, 35)}</Digest>
            </Intro>
            <SocialWrapper>social list</SocialWrapper>
          </Body>

          <Footer>
            <WorksWrapper>
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/edu/harvard.png`} />
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/company/microsoft.png`} />
            </WorksWrapper>
            <IconText iconSrc={`${ICON}/article/viewed.svg`}>3343</IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(DeveloperGallery)
