/*
 *
 * NaviMenu
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import { isEmpty, findIndex, propEq } from 'ramda'

import { buildLog } from '@/utils'
import { SpaceGrow, Space } from '@/components/Common'

import PinNumber from './PinNumber'

import { Item, MoreItem, FixedIcon, Icon, ActiveDot } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const renderRightIcon = (item, activeParentMenuId, pinNumberHoverType) => {
  if (item.pinNumber) {
    return (
      <PinNumber num={item.pinNumber} pinNumberHoverType={pinNumberHoverType} />
    )
  }

  return (
    <>
      {item.icon ? (
        <Icon active={item.id === activeParentMenuId} src={item.icon} />
      ) : (
        <ActiveDot />
      )}
    </>
  )
}

const RootMenu = ({
  menuItems,
  onSelect,
  activeParentMenuId,
  withDivider,
  initActiveMenuId,
  initDone,
  setInitDone,
  showMoreItem,
  onShowMore,
  pinNumberHoverType,
}) => {
  useEffect(() => {
    if (!initDone && !isEmpty(initActiveMenuId)) {
      const index = findIndex(propEq('id', initActiveMenuId), menuItems)

      onSelect(menuItems[index])
      setInitDone(true)
    }

    /* eslint-disable-next-line */
  }, [])

  return (
    <>
      {menuItems.map((item) => (
        <Item
          key={item.id}
          active={item.id === activeParentMenuId}
          withDivider={withDivider}
          onClick={() => onSelect(item)}
        >
          {item.fixedIcon && <FixedIcon src={item.fixedIcon} />}
          {item.title}
          <SpaceGrow />
          {renderRightIcon(item, activeParentMenuId, pinNumberHoverType)}
        </Item>
      ))}
      {showMoreItem && (
        <MoreItem onClick={() => onShowMore?.()}>
          ~~
          <Space left="10px" />
          查看更多
          <Space right="10px" />
          ~~
        </MoreItem>
      )}
    </>
  )
}

RootMenu.propTypes = {
  menuItems: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
  activeParentMenuId: T.string.isRequired,
  withDivider: T.bool.isRequired,
  initActiveMenuId: T.string,
  initDone: T.bool.isRequired,
  setInitDone: T.func.isRequired,
  showMoreItem: T.bool.isRequired,
  onShowMore: T.oneOfType([T.func, T.instanceOf(null)]),
}

RootMenu.defaultProps = {
  initActiveMenuId: '',
  onShowMore: null,
}

export default React.memo(RootMenu)
