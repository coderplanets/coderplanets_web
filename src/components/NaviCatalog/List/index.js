/*
 *
 * NaviCatalog
 *
 */

import React from 'react'
import T from 'prop-types'
import { map, prop, includes } from 'ramda'

import { buildLog } from '@/utils'
import { SpaceGrow, Space } from '@/components/Common'

import { ROOT_MENU, CHILD_MENU } from '../constant'

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
const log = buildLog('c:NaviCatalog:List')

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

const List = ({
  menuMode,
  catalogItems,
  onSelect,
  activeCatalogId,
  activePath,
  withDivider,
  showMoreItem,
  showItemTotal,
  onShowMore,
}) => {
  const activePathIdList = [...map(prop('id'), activePath), activeCatalogId]

  return (
    <Wrapper isRootMenu={menuMode === ROOT_MENU}>
      {catalogItems.map((item) => {
        const active = includes(item.id, activePathIdList)

        return (
          <Item
            key={item.id}
            isRootMenu={menuMode === ROOT_MENU}
            active={active}
            withDivider={withDivider}
            onClick={() => onSelect(item)}
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

List.propTypes = {
  menuMode: T.oneOf([ROOT_MENU, CHILD_MENU]).isRequired,
  // TODO:
  catalogItems: T.arrayOf(T.object).isRequired,
  activePath: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
  activeCatalogId: T.string.isRequired,
  withDivider: T.bool.isRequired,
  showMoreItem: T.bool.isRequired,
  onShowMore: T.oneOfType([T.func, T.instanceOf(null)]),
}

List.defaultProps = {
  onShowMore: null,
}

export default React.memo(List)
