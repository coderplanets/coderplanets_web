/*
 *
 * ArticleEditToolbar
 *
 */

import React from 'react'
import T from 'prop-types'

import { SITE_URL } from '@/config'
import { THREAD } from '@/constant'
import { buildLog } from '@/utils'

import CopyrightSelector from './CopyrightSelector'

import {
  Wrapper,
  LinkLabel,
  LinkInput,
  SourceLink,
  CopyRightWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleEditToolbar:index')

const ArticleEditToolbar = ({
  onLinkAddrChange,
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

    {copyRight !== 'original' && (
      <SourceLink>
        <LinkLabel>原文地址</LinkLabel>
        <LinkInput
          placeholder={`请填写url地址, 比如: ${SITE_URL}`}
          value={linkAddr}
          onChange={onLinkAddrChange}
        />
      </SourceLink>
    )}
  </Wrapper>
)

ArticleEditToolbar.propTypes = {
  thread: T.oneOf([THREAD.POST, THREAD.JOB]),
  editData: T.shape({
    copyRight: T.string,
    linkAddr: T.string,
  }).isRequired,
  onLinkAddrChange: T.func,
  onCopyrightChange: T.func,
}

ArticleEditToolbar.defaultProps = {
  thread: THREAD.POST,
  onLinkAddrChange: log,
  onCopyrightChange: log,
}

export default React.memo(ArticleEditToolbar)
