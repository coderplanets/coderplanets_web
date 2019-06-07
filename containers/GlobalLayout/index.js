/*
 *
 * GlobalLayout
 *
 */

import React from 'react'
import T from 'prop-types'
import useNetwork from 'react-use/lib/useNetwork'

import { ICON_CMD } from '@config'
import { connectStore } from '@utils'

import { useShortcut, useMedia, usePlatform } from '@components/Hooks'

import { Wrapper, SubCommunitiesExpander, ExpanderIcon } from './styles'
import { useInit, openDoraemon, queryDoraemon } from './logic'

const GlobalLayoutContainer = ({ globalLayout, children, noSidebar }) => {
  const { online } = useNetwork()
  const media = useMedia()
  const platform = usePlatform()

  useInit(globalLayout, { online, media, platform })

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
  children: T.arrayOf(T.element),
  globalLayout: T.object.isRequired,
  noSidebar: T.bool,
}

GlobalLayoutContainer.defaultProps = {
  children: <div />,
  noSidebar: false,
}

export default connectStore(GlobalLayoutContainer)
