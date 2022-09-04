/*
 *
 * NaviCatalog
 *
 */

import { FC, memo } from 'react'
import { map, prop, includes } from 'ramda'

import type { TNaviTag } from '@/spec'
import { buildLog } from '@/utils/logger'
import { SpaceGrow, Space } from '@/widgets/Common'

import { ROOT_MENU } from '../constant'

import {
  Wrapper,
  Item,
  MoreItem,
  FixedIcon,
  Icon,
  ActiveDot,
  TotalNumber,
} from '../styles/list'

/* eslint-disable-next-line */
const log = buildLog('w:NaviCatalog:List')

const renderRightIcon = (item, active, showItemTotal) => {
  if (showItemTotal && item.total) {
    return <TotalNumber active={active}>{item.total}</TotalNumber>
  }

  return (
    <>
      {item.icon ? (
        <Icon src={item.icon} active={active} />
      ) : (
        <ActiveDot active={active} />
      )}
    </>
  )
}

type TProps = {
  menuMode: 'root' | 'child'
  catalogItems: TNaviTag[]
  activeCatalogId: string
  activePath: TNaviTag[]
  withDivider: boolean
  showMoreItem: boolean
  showItemTotal: boolean
  testid?: string

  onItemSelect: (item: TNaviTag) => void
  onShowMore: () => void
}

const List: FC<TProps> = ({
  menuMode,
  catalogItems,
  onItemSelect,
  activeCatalogId,
  activePath,
  withDivider,
  showMoreItem,
  showItemTotal,
  onShowMore,
  testid = 'navi-catalog-list',
}) => {
  const activePathIdList = [...map(prop('id'), activePath), activeCatalogId]

  return (
    <Wrapper isRootMenu={menuMode === ROOT_MENU} testid={testid}>
      {catalogItems.map((item) => {
        const active = includes(item.id, activePathIdList)

        return (
          <Item
            key={item.id}
            isRootMenu={menuMode === ROOT_MENU}
            active={active}
            withDivider={withDivider}
            onClick={() => onItemSelect(item)}
          >
            {item.fixedIcon && <FixedIcon src={item.fixedIcon} />}
            {item.title}
            <SpaceGrow />
            {renderRightIcon(item, active, showItemTotal)}
          </Item>
        )
      })}
      {showMoreItem && (
        <MoreItem onClick={() => onShowMore?.()}>
          ~~
          <Space left={10} />
          查看更多
          <Space right={10} />
          ~~
        </MoreItem>
      )}
    </Wrapper>
  )
}

export default memo(List)
