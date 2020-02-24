/*
 *
 * NaviMenu
 *
 */

import React from 'react'
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
const Dashboard = ({ view, setView }) => {
  return (
    <Wrapper>
      酷服务 / 工具
      <Footer>
        <FilterOption
          onClick={() => setView('catalog')}
          active={view === 'catalog'}
        >
          <OptionIcon src={`${ICON_CMD}/navi/navi_list.svg`} />
        </FilterOption>
        <FilterOption
          onClick={() => setView('filter')}
          active={view === 'filter'}
        >
          <OptionIcon src={`${ICON_CMD}/navi/navi_filter.svg`} />
        </FilterOption>
        <FilterOption onClick={() => setView('more')} active={view === 'more'}>
          <OptionIcon
            src={`${ICON_CMD}/navi/navi_more.svg`}
            onClick={() => setView('more')}
          />
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
}

Dashboard.defaultProps = {
  view: 'catalog',
}

export default React.memo(Dashboard)
