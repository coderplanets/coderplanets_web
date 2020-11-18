/*
 *
 * DigestSentence
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, PreviewWrapper, PreviewText, PreviewIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DigestSentence:index')

const DigestSentence = ({
  testId,
  children,
  onPreview,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <Wrapper
      testId={testId}
      onClick={onPreview}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {children}
      <PreviewWrapper>
        <PreviewText>预览</PreviewText>
        <PreviewIcon src={`${ICON}/shape/arrow-simple.svg`} />
      </PreviewWrapper>
    </Wrapper>
  )
}

DigestSentence.propTypes = {
  testId: T.string,
  children: T.oneOfType([T.string, T.node]),
  onPreview: T.func,
  top: T.number,
  bottom: T.number,
  left: T.number,
  right: T.number,
}

DigestSentence.defaultProps = {
  testId: 'digest-sentence',
  children: '可能是最性感的开发者社区，来为你心爱的作品建立...',
  onPreview: log,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

export default React.memo(DigestSentence)
