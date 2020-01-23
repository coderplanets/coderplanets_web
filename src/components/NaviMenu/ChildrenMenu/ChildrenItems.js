/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
// import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/BaseStyled'

import {
  Wrapper,
  Item,
  ActiveDot,
} from '../styles/children_menu/children_items'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const ChildrenItems = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <div key={item.id}>
          <Item active={item.id === '101'}>
            {item.id === '101' && <ActiveDot />}

            <SpaceGrow />
            {item.title}
          </Item>
        </div>
      ))}
    </Wrapper>
  )
}

ChildrenItems.propTypes = {
  items: T.object.isRequired,
}

ChildrenItems.defaultProps = {}

export default React.memo(ChildrenItems)
