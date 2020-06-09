/*
 *
 * FiltersMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'
import { merge } from 'ramda'

import { buildLog } from '@/utils'

import { SpaceGrow } from '@/components/Common'
import Filter from './Filter'
import { Wrapper, ItemWrapper, Item, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FiltersMenu:index')

const initActiveMap = (items) => {
  const menuMap = {}
  for (let index = 0; index < items.length; index += 1) {
    const element = items[index]

    const content = element.options ? element.options[0] : element
    menuMap[element.id] = { ...content }
  }

  return menuMap
}

const FiltersMenu = ({
  items,
  activeId,
  noFilter,
  onItemClick,
  itemBgHighlight,
  revert,
  withDivider,
}) => {
  // const [expandMenuId, setExpandMenuId] = useState(null)
  const [expandMenuId, setExpandMenuId] = useState(activeId)
  const [activeMap, setActiveMap] = useState(initActiveMap(items))

  return (
    <Wrapper>
      {items.map((item, index) => (
        <ItemWrapper
          key={item.id}
          withDivider={withDivider}
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
            topMargin={
              itemBgHighlight && item.id === expandMenuId && index !== 0
            }
            itemBgHighlight={itemBgHighlight}
            revert={revert}
          >
            {!revert ? (
              <React.Fragment>
                <Icon active={item.id === expandMenuId} src={item.icon} />
                <SpaceGrow />
                {item.title}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {item.title}
                <SpaceGrow />
                <Icon active={item.id === expandMenuId} src={item.icon} />
              </React.Fragment>
            )}
          </Item>
          {!noFilter && (
            <Filter
              id={item.id}
              expandMenuId={expandMenuId}
              activeMap={activeMap}
              options={item.options}
              revert={revert}
              onSelect={(parentId, item) =>
                setActiveMap(merge(activeMap, { [parentId]: item }))
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
        }),
      ),
    }),
  ).isRequired,
  activeId: T.oneOfType([T.string, T.instanceOf(null)]),
  noFilter: T.bool,
  onItemClick: T.func,
  itemBgHighlight: T.bool,
  revert: T.bool,
  withDivider: T.bool,
}

FiltersMenu.defaultProps = {
  activeId: null,
  noFilter: false,
  onItemClick: log,
  itemBgHighlight: true,
  revert: false,
  withDivider: true,
}

export default React.memo(FiltersMenu)
