//

/*
 *
 * ModeLineMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { TYPE } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import GlobalMenu from './GlobalMenu/index'
import SearchMenu from './SearchMenu'
import MoreMenu from './MoreMenu'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLineMenu')

const renderMenus = (type) => {
  switch (type) {
    case TYPE.MM_TYPE.MORE: {
      return <MoreMenu />
    }

    case TYPE.MM_TYPE.SEARCH: {
      return <SearchMenu />
    }

    default: {
      return <GlobalMenu />
    }
  }
}

const ModeLineMenuContainer = ({ modeLineMenu: store, testId, type }) => {
  useInit(store)

  return <Wrapper testId={testId}>{renderMenus(type)}</Wrapper>
}

ModeLineMenuContainer.propTypes = {
  modeLineMenu: T.any.isRequired,
  type: T.oneOf([
    TYPE.MM_TYPE.GLOBAL_MENU,
    TYPE.MM_TYPE.COMMUNITY,
    TYPE.MM_TYPE.FILTER,
    TYPE.MM_TYPE.DISCOVER,
    TYPE.MM_TYPE.PUBLISH,
    TYPE.MM_TYPE.SEARCH,
    TYPE.MM_TYPE.MORE,
  ]).isRequired,
  testId: T.string,
}

ModeLineMenuContainer.defaultProps = {
  testId: 'mode-line-menu',
}

export default connectStore(ModeLineMenuContainer)
