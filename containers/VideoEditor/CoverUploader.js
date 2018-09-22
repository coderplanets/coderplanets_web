import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Thumbnil,
  Poster,
  UploaderLabel,
  UploaderIcon,
  UploaderText,
} from './styles/cover_uploader'

const CoverUploader = () => (
  <Wrapper>
    <Thumbnil>
      <UploaderLabel>
        <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
        <UploaderText>缩略图</UploaderText>
      </UploaderLabel>
    </Thumbnil>
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
