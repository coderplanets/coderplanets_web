/*
 *
 * FiltersMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import { SpaceGrow } from '@components/BaseStyled'

import Filter from './Filter'

import { Wrapper, ItemWrapper, Item, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FiltersMenu:index')

/* <ActiveDot /> */
const FiltersMenu = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(null)

  return (
    <Wrapper>
      {items.map(item => (
        <ItemWrapper
          key={item.id}
          onClick={() => {
            item.id === activeItemId
              ? setActiveItemId(null)
              : setActiveItemId(item.id)
          }}
        >
          <Item active={item.id === '0'}>
            <Icon active={item.id === '0'} src={item.icon} />
            <SpaceGrow />
            {item.title}
          </Item>
          <Filter id={item.id} activeItemId={activeItemId} data={item.filter} />
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

FiltersMenu.propTypes = {
  // TODO:
  items: T.arrayOf(T.object).isRequired,
}

FiltersMenu.defaultProps = {}

export default React.memo(FiltersMenu)
