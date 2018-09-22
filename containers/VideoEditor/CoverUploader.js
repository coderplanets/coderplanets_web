import React from 'react'

import { ICON_CMD } from '../../config'

import { Maybe } from '../../components'
import DocUploader from '../DocUploader'

import {
  Wrapper,
  Thumbnil,
  Poster,
  UploaderLabel,
  UploaderIcon,
  UploaderText,
  CoverImg,
  ThumbCermeraIcon,
  PosterCermeraIcon,
} from './styles/cover_uploader'

import { nilOrEmpty } from '../../utils'

import { onUploadDone, copyThumbnilLink } from './logic'

const CoverUploader = ({ thumbnil, poster }) => (
  <Wrapper>
    <DocUploader onUploadDone={onUploadDone.bind(this, 'thumbnil')}>
      {nilOrEmpty(thumbnil) ? (
        <Thumbnil>
          <UploaderLabel>
            <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
            <UploaderText>缩略图</UploaderText>
          </UploaderLabel>
        </Thumbnil>
      ) : (
        <Thumbnil>
          <ThumbCermeraIcon src={`${ICON_CMD}/camera.svg`} />
          <CoverImg src={thumbnil} />
        </Thumbnil>
      )}
    </DocUploader>

    {nilOrEmpty(poster) ? (
      <Poster>
        <DocUploader onUploadDone={onUploadDone.bind(this, 'poster')}>
          <UploaderLabel>
            <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
            <UploaderText>上传封面图</UploaderText>
          </UploaderLabel>
        </DocUploader>
        <br />
        <Maybe data={!nilOrEmpty(thumbnil)}>
          <UploaderLabel>
            <UploaderIcon src={`${ICON_CMD}/copy.svg`} />
            <UploaderText onClick={copyThumbnilLink.bind(this, thumbnil)}>
              使用缩略图
            </UploaderText>
          </UploaderLabel>
        </Maybe>
      </Poster>
    ) : (
      <Poster>
        <DocUploader onUploadDone={onUploadDone.bind(this, 'poster')}>
          <React.Fragment>
            <PosterCermeraIcon src={`${ICON_CMD}/camera.svg`} />
            <CoverImg src={poster} />
          </React.Fragment>
        </DocUploader>
      </Poster>
    )}
  </Wrapper>
)

export default CoverUploader
