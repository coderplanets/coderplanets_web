import React from 'react'
// import R from 'ramda'

import { ICON_CMD } from '../../config'

import { Labeler } from '..'
import { FileUploader } from '../../components'

import {
  Wrapper,
  ExtraItem,
  ExtraItemTitle,
  ExtraItemIcon,
  ExtraDivider,
} from './styles/editor_footer'

import { insertCode, onUploadImageDone } from './logic'

const EditorFooter = () => (
  <Wrapper>
    <Labeler />
    <ExtraDivider src={`${ICON_CMD}/more.svg`} />
    <ExtraItem>
      <ExtraItemIcon src={`${ICON_CMD}/extra_vote.svg`} />
      <ExtraItemTitle>投票</ExtraItemTitle>
    </ExtraItem>
    <ExtraDivider src={`${ICON_CMD}/more.svg`} />
    <ExtraItem onClick={insertCode}>
      <ExtraItemIcon src={`${ICON_CMD}/extra_code.svg`} />
      <ExtraItemTitle>代码</ExtraItemTitle>
    </ExtraItem>
    <ExtraDivider src={`${ICON_CMD}/more.svg`} />
    <FileUploader onUploadDone={onUploadImageDone}>
      <ExtraItem>
        <ExtraItemIcon src={`${ICON_CMD}/extra_image.svg`} />
        <ExtraItemTitle>图片</ExtraItemTitle>
      </ExtraItem>
    </FileUploader>
    <ExtraDivider src={`${ICON_CMD}/more.svg`} />
    <ExtraItem>
      <ExtraItemIcon src={`${ICON_CMD}/extra_setting.svg`} />
      <ExtraItemTitle>设置</ExtraItemTitle>
    </ExtraItem>
  </Wrapper>
)

export default EditorFooter
