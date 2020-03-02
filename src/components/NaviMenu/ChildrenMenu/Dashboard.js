/*
 *
 * NaviMenu
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

// import { SpaceGrow } from '@components/BaseStyled'
import {
  Wrapper,
  Footer,
  FilterOption,
  OptionIcon,
} from '../styles/children_menu/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const Dashboard = ({ view, setView, parentMenuItem }) => {
  const handleViewChange = useCallback(
    e => {
      const { view } = e.target.dataset
      setView(view)
    },
    [setView]
  )

  return (
    <Wrapper>
      {parentMenuItem.title}
      <Footer>
        <FilterOption
          data-view="catalog"
          onClick={handleViewChange}
          active={view === 'catalog'}
        >
          <OptionIcon src={`${ICON_CMD}/navi/navi_list.svg`} />
        </FilterOption>
        <FilterOption
          data-view="filter"
          onClick={handleViewChange}
          active={view === 'filter'}
        >
          <OptionIcon src={`${ICON_CMD}/navi/navi_filter.svg`} />
        </FilterOption>
        <FilterOption
          data-view="more"
          onClick={handleViewChange}
          active={view === 'more'}
        >
          <OptionIcon src={`${ICON_CMD}/navi/navi_more.svg`} />
        </FilterOption>
        {/* 
          info | add | 提交 bug 说明 
        */}
      </Footer>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  view: T.oneOf(['catalog', 'filter', 'more']),
  setView: T.func.isRequired,
  parentMenuItem: T.any.isRequired, // TODO
}

Dashboard.defaultProps = {
  view: 'catalog',
}

export default React.memo(Dashboard)
