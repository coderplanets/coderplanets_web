import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import DocUploader from '../DocUploader'
import Labeler from '../Labeler'

import Maybe from '../../components/Maybe'

import {
  Wrapper,
  Item,
  ItemTitle,
  ItemIcon,
  Divider,
} from './styles/editor_footer'

import { insertCode, onUploadImageDone } from './logic'

const CodeInputer = ({ divider }) => (
  <React.Fragment>
    <Maybe test={!divider}>
      <Divider src={`${ICON_CMD}/more.svg`} />
    </Maybe>
    <Item onClick={insertCode}>
      <ItemIcon src={`${ICON_CMD}/extra_code.svg`} />
      <ItemTitle>代码</ItemTitle>
    </Item>
  </React.Fragment>
)

const PicUploader = ({ divider }) => (
  <React.Fragment>
    <Maybe test={!divider}>
      <Divider src={`${ICON_CMD}/more.svg`} />
    </Maybe>
    <DocUploader onUploadDone={onUploadImageDone}>
      <Item>
        <ItemIcon src={`${ICON_CMD}/extra_image.svg`} />
        <ItemTitle>上传图片</ItemTitle>
      </Item>
    </DocUploader>
  </React.Fragment>
)

const EditorFooter = ({ editData }) => (
  <Wrapper>
    <Labeler selected={R.pluck('title', editData.tags)} multi />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <CodeInputer divider />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <PicUploader divider />
  </Wrapper>
)

export default EditorFooter

/*
   <Item>
   <ItemIcon src={`${ICON_CMD}/extra_vote.svg`} />
   <ItemTitle>投票</ItemTitle>
   </Item>
   <Item>
   <ItemIcon src={`${ICON_CMD}/extra_setting.svg`} />
   <ItemTitle>设置</ItemTitle>
   </Item>
 */
