import React from 'react'

import { ICON_CMD } from '../../config'

import Maybe from '../../components/Maybe'
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
import { inputOnChange, usePosterAsThumbnil } from './logic'

const CoverUploader = ({ thumbnil, poster }) => (
  <Wrapper>
    <DocUploader
      onUploadDone={inputOnChange.bind(this, 'thumbnil')}
      pasteImage={false}
    >
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
        <DocUploader
          onUploadDone={inputOnChange.bind(this, 'poster')}
          pasteImage={false}
        >
          <UploaderLabel>
            <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
            <UploaderText>上传封面图</UploaderText>
          </UploaderLabel>
        </DocUploader>
        <br />
        <Maybe test={!nilOrEmpty(thumbnil)}>
          <UploaderLabel>
            <UploaderIcon src={`${ICON_CMD}/copy.svg`} />
            <UploaderText onClick={usePosterAsThumbnil}>
              使用缩略图
            </UploaderText>
          </UploaderLabel>
        </Maybe>
      </Poster>
    ) : (
      <DocUploader
        onUploadDone={inputOnChange.bind(this, 'poster')}
        pasteImage={false}
      >
        <Poster>
          <PosterCermeraIcon src={`${ICON_CMD}/camera.svg`} />
          <CoverImg src={poster} />
        </Poster>
      </DocUploader>
    )}
  </Wrapper>
)

export default CoverUploader
