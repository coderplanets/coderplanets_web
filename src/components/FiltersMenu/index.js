/*
 *
 * FiltersMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'

import { SpaceGrow } from '@components/BaseStyled'
import Filter from './Filter'
import { Wrapper, ItemWrapper, Item, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FiltersMenu:index')

const initActiveMap = items => {
  const ret = {}
  for (let index = 0; index < items.length; index += 1) {
    const element = items[index]

    ret[element.id] = { ...element.options[0] }
  }

  return ret
}

const FiltersMenu = ({ items, noFilter, onItemClick }) => {
  const [expandMenuId, setExpandMenuId] = useState(null)
  const [activeMap, setActiveMap] = useState(initActiveMap(items))

  return (
    <Wrapper>
      {items.map((item, index) => (
        <ItemWrapper
          key={item.id}
          onClick={() => {
            onItemClick(item)
            item.id === expandMenuId
              ? setExpandMenuId(null)
              : setExpandMenuId(item.id)
          }}
        >
          <Item
            active={item.id === expandMenuId}
            noFilter={noFilter}
            topMargin={item.id === expandMenuId && index !== 0}
          >
            <Icon active={item.id === expandMenuId} src={item.icon} />
            <SpaceGrow />
            {item.title}
          </Item>
          {!noFilter && (
            <Filter
              id={item.id}
              expandMenuId={expandMenuId}
              activeMap={activeMap}
              options={item.options}
              onSelect={(parentId, item) =>
                setActiveMap(R.merge(activeMap, { [parentId]: item }))
              }
            />
          )}
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

FiltersMenu.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string,
      title: T.string,
      icon: T.string,
      options: T.arrayOf(
        T.shape({
          id: T.string,
          title: T.string,
        })
      ),
    })
  ).isRequired,
  noFilter: T.bool,
  onItemClick: T.func,
}

FiltersMenu.defaultProps = {
  noFilter: false,
  onItemClick: log,
}

export default React.memo(FiltersMenu)
