import React from 'react'

import { ICON_CMD } from '../../config'

import DocUploader from '../DocUploader'

import {
  Wrapper,
  Thumbnil,
  Poster,
  UploaderLabel,
  UploaderIcon,
  UploaderText,
} from './styles/cover_uploader'

import { coverOnUpload } from './logic'

const CoverUploader = () => (
  <Wrapper>
    <DocUploader onUploadDone={coverOnUpload}>
      <Thumbnil>
        <UploaderLabel>
          <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
          <UploaderText>缩略图</UploaderText>
        </UploaderLabel>
      </Thumbnil>
    </DocUploader>
    <Poster>
      <UploaderLabel>
        <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
        <UploaderText>上传封面图</UploaderText>
      </UploaderLabel>
      <br />
      <UploaderLabel>
        <UploaderIcon src={`${ICON_CMD}/copy.svg`} />
        <UploaderText>使用缩略图</UploaderText>
      </UploaderLabel>
    </Poster>
  </Wrapper>
)

export default CoverUploader
