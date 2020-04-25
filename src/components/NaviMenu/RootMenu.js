/*
 *
 * NaviMenu
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'
import { SpaceGrow } from '@components/Common'

import { Item, FixedIcon, Icon, ActiveDot, TotalNum } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const renderRightIcon = (item, activeParentMenuId) => {
  if (item.total) return <TotalNum>{item.total}</TotalNum>
  return (
    <React.Fragment>
      {item.icon ? (
        <Icon active={item.id === activeParentMenuId} src={item.icon} />
      ) : (
        <ActiveDot />
      )}
    </React.Fragment>
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
}) => {
  // const [inited, setInited] = useState(false)

  useEffect(() => {
    if (!initDone && !R.isEmpty(initActiveMenuId)) {
      const index = R.findIndex(R.propEq('id', initActiveMenuId), menuItems)

      onSelect(menuItems[index])
      setInitDone(true)
    }

    /* eslint-disable-next-line */
  }, [])

  return (
    <React.Fragment>
      {menuItems.map(item => (
        <Item
          key={item.id}
          active={item.id === activeParentMenuId}
          withDivider={withDivider}
          onClick={() => onSelect(item)}
        >
          {item.fixedIcon && <FixedIcon src={item.fixedIcon} />}
          {item.title}
          <SpaceGrow />
          {renderRightIcon(item, activeParentMenuId)}
        </Item>
      ))}
    </React.Fragment>
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
}

RootMenu.defaultProps = {
  initActiveMenuId: '',
}

export default React.memo(RootMenu)
