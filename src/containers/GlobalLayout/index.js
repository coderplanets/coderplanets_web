/*
 *
 * GlobalLayout
 *
 */

import React from 'react'
import T from 'prop-types'
import useNetwork from 'react-use/lib/useNetwork'

// custom overlayscrollbars
// see: https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react
import 'overlayscrollbars/css/OverlayScrollbars.css'

import { ICON_CMD } from '@config'
import { connectStore } from '@utils'
import { useShortcut, useMedia, usePlatform } from '@hooks'

import {
  Wrapper,
  InnerWrapper,
  SubCommunitiesExpander,
  ExpanderIcon,
} from './styles'
import { useInit, openDoraemon, queryDoraemon } from './logic'

const GlobalLayoutContainer = ({ globalLayout, children, noSidebar }) => {
  const { online } = useNetwork()

  const media = useMedia()
  const platform = usePlatform()

  useInit(globalLayout, { online, media, platform })

  useShortcut('ctrl+p', openDoraemon)
  const { sidebarPin } = globalLayout

  return (
    <Wrapper>
      <InnerWrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
        <SubCommunitiesExpander onClick={queryDoraemon('/')}>
          <ExpanderIcon src={`${ICON_CMD}/expander_more.svg`} />
        </SubCommunitiesExpander>
        {children}
      </InnerWrapper>
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
