/*
 *
 * DirectoryGallery
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import IconText from '@components/IconText'
import InlineTags from './InlineTags'

import {
  Wrapper,
  Block,
  Header,
  IntroHead,
  Icon,
  Title,
  Footer,
  UpdatedAt,
} from './styles/directory_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:DirectoryGallery:index')

const DirectoryGallery = ({ items, onSelect }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 3}
          borderRight={(index + 1) % 4 !== 0}
          onClick={() => onSelect(item)}
        >
          <Header>
            <IntroHead>
              <Icon src={item.icon} />
              <Title>{item.title}</Title>
            </IntroHead>
          </Header>

          <InlineTags items={R.pluck('title', item.childMenu.slice(0, 8))} />

          <Footer>
            <UpdatedAt>最后更新：2天前</UpdatedAt>
            <IconText iconSrc={`${ICON_CMD}/navi/total.svg`}>22</IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

DirectoryGallery.propTypes = {
  items: T.arrayOf(T.object),
  onSelect: T.oneOfType([T.func, T.instanceOf(null)]),
}

DirectoryGallery.defaultProps = {
  items: [],
  onSelect: null,
}

export default React.memo(DirectoryGallery)
