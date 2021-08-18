/*
 *
 * FiltersMenu
 *
 */

import { FC, useState, useCallback, memo } from 'react'
import { merge, equals } from 'ramda'

import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/components/Common'

import Header from './Header'
import Filter from './Filter'
import { Wrapper, ItemWrapper, Item, Icon } from './styles'

import { tags2Options, initActiveMap } from './helper'

/* eslint-disable-next-line */
const log = buildLog('c:FiltersMenu:index')

type TProps = {
  tags?: TTag[]
  activeid?: string | null
  noFilter?: boolean
  onItemClick?: () => void
  itemBgHighlight?: boolean
  revert?: boolean
  withDivider?: boolean
}

const FiltersMenu: FC<TProps> = ({
  tags,
  activeid = null,
  noFilter = false,
  onItemClick = log,
  itemBgHighlight = true,
  revert = false,
  withDivider = true,
}) => {
  const items = tags2Options(tags)
  console.log('=> the items: ', items)

  // const [expandMenuId, setExpandMenuId] = useState(null)
  const [expandMenuId, setExpandMenuId] = useState(activeid)
  const [activeMap, setActiveMap] = useState(initActiveMap(items))

  console.log('activeMap --> ', activeMap)

  const handleReset = useCallback(() => {
    setActiveMap(initActiveMap(items))
  }, [items])

  const handleSelect = useCallback(
    (item) => {
      onItemClick(item)
      item.id === expandMenuId
        ? setExpandMenuId(null)
        : setExpandMenuId(item.id)
    },
    [items],
  )

  return (
    <Wrapper>
      <Header
        showReset={!equals(initActiveMap(items), activeMap)}
        onReset={handleReset}
      />
      {items.map((item, index) => (
        <ItemWrapper
          key={item.id}
          withDivider={withDivider}
          onClick={() => handleSelect(item)}
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

export default memo(FiltersMenu)
