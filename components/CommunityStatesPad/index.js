/*
 *
 * CommunityStatesPad
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

import { makeDebugger, prettyNum } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityStatesPad:index')
/* eslint-enable no-unused-vars */

const CommunityStatesPad = ({ community, onShowEditorList }) => {
  const {
    editorsCount,
    subscribersCount,
    postsCount,
    videosCount,
    reposCount,
    jobsCount,
  } = community
  const contentsCount = postsCount + videosCount + reposCount + jobsCount

  return (
    <Wrapper>
      <NumberSection>
        <NumberTitle>关注</NumberTitle>
        <NumberItem>{prettyNum(subscribersCount)}</NumberItem>
      </NumberSection>
      <NumberDivider />
      <NumberSection readonly>
        <NumberTitle readonly>内容</NumberTitle>
        <NumberItem readonly>{prettyNum(contentsCount)}</NumberItem>
      </NumberSection>
      <NumberDivider />
      <NumberSection>
        <NumberTitle readonly>编辑</NumberTitle>
        <NumberItem onClick={onShowEditorList}>
          {prettyNum(editorsCount)}
        </NumberItem>
      </NumberSection>
    </Wrapper>
  )
}

CommunityStatesPad.propTypes = {
  community: PropTypes.shape({
    subscribersCount: PropTypes.number,
    editorsCount: PropTypes.number,
    postsCount: PropTypes.number,
    videosCount: PropTypes.number,
    reposCount: PropTypes.number,
    jobsCount: PropTypes.number,
  }),
  onShowEditorList: PropTypes.func,
}

CommunityStatesPad.defaultProps = {
  community: {
    subscribersCount: 0,
    editorsCount: 0,
    postsCount: 0,
    videosCount: 0,
    reposCount: 0,
    jobsCount: 0,
  },
  onShowEditorList: debug,
}

export default React.memo(CommunityStatesPad)
