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

import Maybe from '@/components/Maybe'
import { Button } from '@/components/Buttons'

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
const log = buildLog('c:ArticleEditToolbar:index')

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
          placeholder={`请填写url地址, 比如: ${SITE_URL}`}
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
  thread: T.oneOf([THREAD.POST, THREAD.JOB]),
  editData: T.shape({
    copyRight: T.string,
    linkAddr: T.string,
  }).isRequired,
  onLinkAddrChange: T.func,
  onCopyrightChange: T.func,
  onPreview: T.func,
}

ArticleEditToolbar.defaultProps = {
  thread: THREAD.POST,
  onLinkAddrChange: log,
  onCopyrightChange: log,
  onPreview: log,
}

export default React.memo(ArticleEditToolbar)
