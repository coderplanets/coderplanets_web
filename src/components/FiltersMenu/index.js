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
const FiltersMenu = ({ items, noFilter }) => {
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
          <Item active={item.id === '0'} noFilter={noFilter}>
            <Icon active={item.id === '0'} src={item.icon} />
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
}

FiltersMenu.defaultProps = {
  noFilter: false,
}

export default React.memo(FiltersMenu)
