import React from 'react'

import { ICON_CMD } from '@/config'
import { nilOrEmpty } from '@/utils'

import DocUploader from '@/containers/DocUploader'
import Maybe from '@/components/Maybe'

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

import { inputOnChange, usePosterAsThumbnil } from './logic'

const CoverUploader = ({ thumbnil, poster }) => (
  <Wrapper>
    <DocUploader
      onUploadDone={() => inputOnChange('thumbnil')}
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
          onUploadDone={() => inputOnChange('poster')}
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
        onUploadDone={() => inputOnChange('poster')}
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

export default React.memo(CoverUploader)
