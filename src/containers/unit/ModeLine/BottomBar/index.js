import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'

import { MenuBlock, CommunityBlock, AccountBlock } from './ArrowBlock'
import { Wrapper, ItemsWrapper, ItemIcon } from '../styles/bottom_bar'

import { openMoreMenu } from '../logic'

const options = [
  {
    title: '过滤',
    raw: 'filter',
    icon: `${ICON}/filter.svg`,
  },
  {
    title: '发现',
    raw: 'discover',
    icon: `${ICON}/discover.svg`,
  },
  {
    title: '发布',
    raw: 'publish',
    icon: `${ICON}/edit/publish-pen.svg`,
  },
  {
    title: '更多',
    raw: 'more',
    icon: `${ICON}/more.svg`,
  },
]

const BottomBar = ({ testId }) => {
  return (
    <Wrapper testId={testId}>
      <MenuBlock />
      <CommunityBlock />
      <ItemsWrapper>
        {options.map((item) => (
          <div key={item.raw} onClick={openMoreMenu}>
            <ItemIcon src={item.icon} />
          </div>
        ))}
      </ItemsWrapper>
      <AccountBlock />
    </Wrapper>
  )
}

BottomBar.propTypes = {
  testId: T.string,
}

BottomBar.defaultProps = {
  testId: 'modeline-bottom-bar',
}

export default BottomBar
