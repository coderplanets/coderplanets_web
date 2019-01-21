/*
 *
 * ArticleEditToolbar
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'antd'

import { makeDebugger, THREAD } from 'utils'
import Maybe from '../Maybe'
import CopyrightSelector from './CopyrightSelector'

import {
  Wrapper,
  LinkLabel,
  LinkInput,
  SourceLink,
  CopyRightWrapper,
  PreviewBtn,
} from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ArticleEditToolbar:index')

const ArticleEditToolbar = ({
  onLinkAddrChange,
  onPreview,
  onCopyrightChange,
  thread,
  editData: { copyRight, linkAddr },
}) => (
  <Wrapper>
    <CopyRightWrapper>
      <CopyrightSelector
        copyRight={copyRight}
        thread={thread}
        onCopyrightChange={onCopyrightChange}
      />
    </CopyRightWrapper>

    <Maybe test={copyRight !== 'original'}>
      <SourceLink>
        <LinkLabel>原地址:</LinkLabel>
        <LinkInput
          placeholder="请填写url地址, 比如: https://coderplanets.com/post/1"
          value={linkAddr}
          onChange={onLinkAddrChange}
        />
      </SourceLink>
    </Maybe>

    <PreviewBtn>
      <Button size="small" type="primary" ghost onClick={onPreview}>
        预览
      </Button>
    </PreviewBtn>
  </Wrapper>
)

ArticleEditToolbar.propTypes = {
  thread: PropTypes.oneOf([THREAD.POST, THREAD.JOB]),
  editData: PropTypes.shape({
    copyRight: PropTypes.string,
    linkAddr: PropTypes.string,
  }).isRequired,
  onLinkAddrChange: PropTypes.func,
  onCopyrightChange: PropTypes.func,
  onPreview: PropTypes.func,
}

ArticleEditToolbar.defaultProps = {
  thread: THREAD.POST,
  onLinkAddrChange: debug,
  onCopyrightChange: debug,
  onPreview: debug,
}

export default React.memo(ArticleEditToolbar)
