/*
 *
 * NaviMenu
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

// import { SpaceGrow } from '@/components/Common'
import {
  Wrapper,
  Title,
  Footer,
  FilterOption,
  OptionIcon,
} from '../styles/children_menu/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const Dashboard = ({ view, setView, joinMode, parentMenuItem }) => {
  const handleViewChange = useCallback(
    (e) => {
      const { view } = e.target.dataset
      setView(view)
    },
    [setView],
  )

  return (
    <Wrapper joinMode={joinMode}>
      <Title joinMode={joinMode}>{parentMenuItem.title}</Title>
      {joinMode && (
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
        </Footer>
      )}
    </Wrapper>
  )
}

Dashboard.propTypes = {
  view: T.oneOf(['catalog', 'filter', 'more']),
  setView: T.func.isRequired,
  parentMenuItem: T.any.isRequired, // TODO
  joinMode: T.bool.isRequired,
}

Dashboard.defaultProps = {
  view: 'catalog',
}

export default React.memo(Dashboard)
