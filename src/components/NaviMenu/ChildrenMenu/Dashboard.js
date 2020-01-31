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
import { Wrapper, Footer, PadIcon } from '../styles/children_menu/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const Dashboard = ({ view, setView }) => {
  return (
    <Wrapper>
      酷服务 / 工具
      <Footer>
        <div onClick={() => setView('catalog')}>
          <PadIcon
            src={`${ICON_CMD}/navi/navi_list.svg`}
            active={view === 'catalog'}
          />
        </div>
        <div onClick={() => setView('filter')}>
          <PadIcon
            src={`${ICON_CMD}/navi/navi_filter.svg`}
            active={view === 'filter'}
          />
        </div>
        <div onClick={() => setView('more')}>
          <PadIcon
            src={`${ICON_CMD}/navi/navi_more.svg`}
            active={view === 'more'}
            onClick={() => setView('more')}
          />
        </div>
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
