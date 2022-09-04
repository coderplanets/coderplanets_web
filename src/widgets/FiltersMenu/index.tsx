/*
 *
 * FiltersMenu
 *
 */

import { FC, useState, useCallback, memo, useEffect } from 'react'
import { merge, isEmpty } from 'ramda'

import type { TTag } from '@/spec'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/widgets/Common'

import Header from './Header'
import Filter from './Filter'
import { Wrapper, ItemWrapper, Item, Icon } from './styles'

import { tags2Options, initActiveMap, getSelectedTags } from './helper'

/* eslint-disable-next-line */
const log = buildLog('w:FiltersMenu:index')

type TProps = {
  tags?: TTag[]
  activeid?: string | null
  noFilter?: boolean
  onSelect?: (tags: TTag[]) => void
  itemBgHighlight?: boolean
  revert?: boolean
  withDivider?: boolean
}

const FiltersMenu: FC<TProps> = ({
  tags,
  activeid = null,
  noFilter = false,
  onSelect = log,
  itemBgHighlight = true,
  revert = false,
  withDivider = true,
}) => {
  const items = tags2Options(tags)

  const [expandMenuId, setExpandMenuId] = useState(activeid)
  const [activeMap, setActiveMap] = useState(initActiveMap(items))
  const [selectedTags, setSelectedTags] = useState<TTag[]>([])

  useEffect(() => setSelectedTags(getSelectedTags(activeMap)), [activeMap])

  const handleReset = useCallback(() => {
    setActiveMap(initActiveMap(items))
  }, [items])

  const handleExpand = useCallback(
    (item) => {
      item.id === expandMenuId
        ? setExpandMenuId(null)
        : setExpandMenuId(item.id)
    },
    [expandMenuId],
  )

  return (
    <Wrapper>
      <Header showReset={!isEmpty(selectedTags)} onReset={handleReset} />
      {items.map((item, index) => (
        <ItemWrapper
          key={item.id}
          withDivider={withDivider}
          onClick={() => handleExpand(item)}
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
              onSelect={(parentId, item) => {
                const newActiveMap = merge(activeMap, { [parentId]: item })
                onSelect(getSelectedTags(newActiveMap))
                setActiveMap(newActiveMap)
              }}
            />
          )}
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(FiltersMenu)
