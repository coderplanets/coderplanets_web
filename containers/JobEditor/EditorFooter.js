import React from 'react'
import R from 'ramda'

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

import { uid } from '../../utils'
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

const EditorFooter = ({ editData }) => (
  <div>
    <CompanyInfoEditor editData={editData} />
    <Wrapper>
      <Wrapper key={uid.gen()}>
        <Labeler
          label="city"
          selected={R.pluck('title', editData.tags)}
          multi
        />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="education" selected={[editData.education]} />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="exp" selected={[editData.exp]} />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="salary" selected={[editData.salary]} />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="field" selected={[editData.field]} />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="finance" selected={[editData.finance]} />
        <Divider src={`${ICON_CMD}/more.svg`} />
        <Labeler label="scale" selected={[editData.scale]} />
      </Wrapper>
      <PicUploader />
    </Wrapper>
  </div>
)

export default EditorFooter
