/*
 *
 * FiltersMenu
 *
 */

import React, { FC, useState, useCallback } from 'react'
import { merge, equals } from 'ramda'

import type { TFiltersMenuItems } from '@/spec'
import { buildLog } from '@/utils'

import { SpaceGrow } from '@/components/Common'

import Header from './Header'
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

type TProps = {
  title?: string
  items?: TFiltersMenuItems
  activeid?: string | null
  noFilter?: boolean
  onItemClick?: () => void
  itemBgHighlight?: boolean
  revert?: boolean
  withDivider?: boolean
}

const FiltersMenu: FC<TProps> = ({
  title = '',
  items,
  activeid = null,
  noFilter = false,
  onItemClick = log,
  itemBgHighlight = true,
  revert = false,
  withDivider = true,
}) => {
  // const [expandMenuId, setExpandMenuId] = useState(null)
  const [expandMenuId, setExpandMenuId] = useState(activeid)
  const [activeMap, setActiveMap] = useState(initActiveMap(items))

  const handleReset = useCallback(() => {
    setActiveMap(initActiveMap(items))
  }, [items])

  return (
    <Wrapper>
      <Header
        title={title}
        showReset={!equals(initActiveMap(items), activeMap)}
        onReset={handleReset}
      />
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
              <>
                <Icon active={item.id === expandMenuId} src={item.icon} />
                <SpaceGrow />
                {item.title}
              </>
            ) : (
              <>
                {item.title}
                <SpaceGrow />
                <Icon active={item.id === expandMenuId} src={item.icon} />
              </>
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

export default React.memo(FiltersMenu)
