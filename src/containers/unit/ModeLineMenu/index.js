//

/*
 *
 * ModeLineMenu
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { TYPE } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import GlobalMenu from './GlobalMenu/index'
import SearchMenu from './SearchMenu'
import MoreMenu from './MoreMenu'
import FilterMenu from './FilterMenu'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLineMenu')

const renderMenus = (type, curActive) => {
  switch (type) {
    case TYPE.MM_TYPE.MORE: {
      return <MoreMenu />
    }

    case TYPE.MM_TYPE.SEARCH: {
      return <SearchMenu />
    }

    case TYPE.MM_TYPE.FILTER: {
      return <FilterMenu curActive={curActive} />
    }

    default: {
      return <GlobalMenu />
    }
  }
}

const ModeLineMenuContainer = ({ modeLineMenu: store, testid, type }) => {
  useInit(store)
  const { curActive } = store

  return <Wrapper testid={testid}>{renderMenus(type, curActive)}</Wrapper>
}

ModeLineMenuContainer.propTypes = {
  modeLineMenu: T.any.isRequired,
  type: T.oneOf([values(TYPE.MM_TYPE)]).isRequired,
  testid: T.string,
}

ModeLineMenuContainer.defaultProps = {
  testid: 'mode-line-menu',
}

export default pluggedIn(ModeLineMenuContainer)
