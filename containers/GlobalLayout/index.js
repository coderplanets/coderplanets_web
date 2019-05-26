/*
 *
 * GlobalLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import useNetwork from 'react-use/lib/useNetwork'

import { ICON_CMD } from '@config'
import { connectStore } from '@utils'

import { useShortcut } from '@components/Hooks'

import { Wrapper, SubCommunitiesExpander, ExpanderIcon } from './styles'
import { useInit, openDoraemon, queryDoraemon } from './logic'

const GlobalLayoutContainer = ({ globalLayout, children, noSidebar }) => {
  const { online } = useNetwork()
  useInit(globalLayout, { online })
  useShortcut('ctrl+p', openDoraemon)

  const { sidebarPin } = globalLayout

  return (
    <Wrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
      <SubCommunitiesExpander onClick={queryDoraemon('/')}>
        <ExpanderIcon src={`${ICON_CMD}/expander_more.svg`} />
      </SubCommunitiesExpander>
      {children}
    </Wrapper>
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

export default connectStore(GlobalLayoutContainer)
