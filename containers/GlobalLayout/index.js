/*
 *
 * GlobalLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import Hotkeys from 'react-hot-keys'

import { ICON_CMD } from 'config'
import { storePlug } from 'utils'

import { Wrapper, SubCommunitiesExpander, ExpanderIcon } from './styles'

import { useInit, openDoraemon, queryDoraemon } from './logic'

const GlobalLayoutContainer = ({ globalLayout, children, noSidebar }) => {
  useInit(globalLayout)

  const { sidebarPin } = globalLayout

  return (
    <Hotkeys keyName="ctrl+p" onKeyDown={openDoraemon}>
      <Wrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
        <SubCommunitiesExpander onClick={queryDoraemon('/')}>
          <ExpanderIcon src={`${ICON_CMD}/expander_more.svg`} />
        </SubCommunitiesExpander>
        {children}
      </Wrapper>
    </Hotkeys>
  )
}

GlobalLayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  globalLayout: PropTypes.object.isRequired,
  noSidebar: PropTypes.bool,
}

GlobalLayoutContainer.defaultProps = {
  children: <div />,
  noSidebar: false,
}

export default inject(storePlug('globalLayout'))(
  observer(GlobalLayoutContainer)
)
