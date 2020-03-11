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
const FiltersMenu = ({ items, noFilter, onItemClick, activeId }) => {
  const [activeItemId, setActiveItemId] = useState(null)

  return (
    <Wrapper>
      {items.map(item => (
        <ItemWrapper
          key={item.id}
          onClick={() => {
            onItemClick(item)
            item.id === activeItemId
              ? setActiveItemId(null)
              : setActiveItemId(item.id)
          }}
        >
          <Item active={item.id === activeId} noFilter={noFilter}>
            <Icon active={item.id === activeId} src={item.icon} />
            <SpaceGrow />
            {item.title}
          </Item>
          {!noFilter && (
            <Filter
              id={item.id}
              activeItemId={activeItemId}
              data={item.filter}
            />
          )}
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

FiltersMenu.propTypes = {
  // TODO:
  items: T.arrayOf(T.object).isRequired,
  noFilter: T.bool,
  onItemClick: T.func,
  activeId: T.string,
}

FiltersMenu.defaultProps = {
  noFilter: false,
  onItemClick: log,
  activeId: '0',
}

export default React.memo(FiltersMenu)
