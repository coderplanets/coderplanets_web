import React from 'react'

import { Button, Maybe } from '../../components'
import CopyrightSelector from './CopyrightSelector'

import { Wrapper, CopyRightWrapper, PreviewBtn } from './styles/editor_header'
import { LinkLabel, LinkInput, SourceLink } from './styles'

import { changeView, inputOnChange } from './logic'

const EditorHeader = ({ thread, editData: { copyRight, linkAddr } }) => (
  <Wrapper>
    <CopyRightWrapper>
      <CopyrightSelector copyRight={copyRight} thread={thread} />
    </CopyRightWrapper>

    <Maybe test={copyRight !== 'original'}>
      <SourceLink>
        <LinkLabel>原地址:</LinkLabel>
        <LinkInput
          placeholder="请填写url地址, 比如: https://coderplanets/js/posts/..."
          value={linkAddr}
          onChange={inputOnChange.bind(this, 'linkAddr')}
        />
      </SourceLink>
    </Maybe>

    <PreviewBtn>
      <Button
        size="small"
        type="primary"
        ghost
        onClick={changeView.bind(this, 'PREVIEW_VIEW')}
      >
        预览
      </Button>
    </PreviewBtn>
  </Wrapper>
)

export default EditorHeader
