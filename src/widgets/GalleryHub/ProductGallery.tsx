/*
 *
 * ProductGallery
 *
 */

import { FC, memo } from 'react'

import type { TGallery } from '@/spec'
import { ICON } from '@/config'
import { cutRest, getRandomInt } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Linker from '@/widgets/Linker'
import Upvote from '@/widgets/Upvote'
import IconText from '@/widgets/IconText'
import { SpaceGrow } from '@/widgets/Common'

import InlineTags from './InlineTags'

import { mockProducts } from './mock'
import {
  Wrapper,
  Block,
  Header,
  LinkHead,
  IntroHead,
  Icon,
  Title,
  Desc,
  Footer,
  CommentWrapper,
} from './styles/product_gallery'

/* eslint-disable-next-line */
const log = buildLog('w:ProductGallery:index')

type TProps = {
  items?: TGallery[]
}

const ProductGallery: FC<TProps> = ({ items = mockProducts() }) => {
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
              <Linker src={item.homeLink} plainColor />
            </LinkHead>
            <IntroHead>
              <Icon src={item.icon} />
              <Title>{item.title}</Title>
            </IntroHead>
          </Header>

          {item.desc && <Desc>{cutRest(item.desc, 50)}</Desc>}
          {item.tags && <InlineTags items={item.tags} />}
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

export default memo(ProductGallery) as FC<TProps>
