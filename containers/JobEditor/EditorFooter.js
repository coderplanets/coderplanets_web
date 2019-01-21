import React from 'react'
import R from 'ramda'

import Maybe from 'components/Maybe'
import { ICON_CMD } from 'config'

import { uid } from 'utils'
import DocUploader from '../DocUploader'
import Labeler from '../Labeler'

import CompanyInfoEditor from './CompanyInfoEditor'

import {
  Wrapper,
  Item,
  ItemTitle,
  ItemIcon,
  Divider,
} from './styles/editor_footer'

import { onUploadImageDone } from './logic'

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

const LabelList = ({ data }) => (
  <Wrapper>
    <Labeler label="city" selected={R.pluck('title', data.tags)} multi />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="education" selected={[data.education]} />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="exp" selected={[data.exp]} />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="salary" selected={[data.salary]} />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="field" selected={[data.field]} />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="finance" selected={[data.finance]} />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="scale" selected={[data.scale]} />
  </Wrapper>
)

/*
   NOTE, the uid.gen is a magic fix and i don't kown why..
   if not use uid.gen, the labels in create/edit is choas
 */
const EditorFooter = ({ isEdit, editData }) => (
  <div>
    <CompanyInfoEditor editData={editData} />
    <Wrapper>
      {isEdit ? (
        <LabelList key={uid.gen()} data={editData} />
      ) : (
        <LabelList data={editData} />
      )}
      <PicUploader />
    </Wrapper>
  </div>
)

export default EditorFooter
