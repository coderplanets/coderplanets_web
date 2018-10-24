import React from 'react'
// import R from 'ramda'

import { ICON_CMD } from '../../config'

import DocUploader from '../DocUploader'

import { Labeler } from '..'
import { Maybe } from '../../components'

import {
  Wrapper,
  Item,
  ItemTitle,
  ItemIcon,
  Divider,
} from './styles/editor_footer'

import CompanyInfoEditor from './CompanyInfoEditor'

import { THREAD } from '../../utils'
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
        <ItemTitle>图片</ItemTitle>
      </Item>
    </DocUploader>
  </React.Fragment>
)

const EditorFooter = ({ thread, editData }) => {
  switch (thread) {
    case THREAD.JOB: {
      return (
        <div>
          <CompanyInfoEditor editData={editData} />
          <Wrapper>
            <Labeler label="city" />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="salary" />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="education" />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="finance" />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="scale" />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="field" multi />
            <Divider src={`${ICON_CMD}/more.svg`} />
            <Labeler label="exp" />
            <PicUploader />
          </Wrapper>
        </div>
      )
    }
    default: {
      return (
        <Wrapper>
          <Labeler />
          <Divider src={`${ICON_CMD}/more.svg`} />
          <CodeInputer divider />
          <Divider src={`${ICON_CMD}/more.svg`} />
          <PicUploader divider />
        </Wrapper>
      )
    }
  }
}

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
