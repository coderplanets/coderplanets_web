/*
 *
 * FamePeopleList
 *
 */

import { FC, memo } from 'react'

import type { TGallery } from '@/spec'
import { ICON } from '@/config'
import { getRandomInt } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Upvote from '@/widgets/Upvote'
import IconText from '@/widgets/IconText'
import { SpaceGrow } from '@/widgets/Common'

import { mockFameous } from '../mock'
import CardHeader from './CardHeader'

import {
  Wrapper,
  Block,
  Body,
  Intro,
  Avatar,
  Title,
  Birthday,
  AKA,
  Digest,
  Footer,
  CommentWrapper,
} from '../styles/people_gallery/fame_people_gallery'

/* eslint-disable-next-line */
const log = buildLog('w:ProductGallery:index')

type TProps = {
  items?: TGallery[]
}

const FamePeopleList: FC<TProps> = ({ items = mockFameous() }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
        >
          <CardHeader item={item} />
          <Body>
            <Avatar src={item.icon} />
            <Intro>
              <Title>{item.title}</Title>
              <AKA>({item.aka})</AKA>
              <Birthday>{item.birthday}</Birthday>
            </Intro>
          </Body>

          <Digest>{item.desc}</Digest>
          <SpaceGrow />

          <Footer>
            <Upvote
              count={getRandomInt(10, 100)}
              avatarList={[]}
              type="guide-list"
            />
            <CommentWrapper>
              <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
                {getRandomInt(10, 100)}
              </IconText>
            </CommentWrapper>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(FamePeopleList)
