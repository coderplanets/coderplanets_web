/*
 *
 * DigestSentence
 *
 */

import React from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Space } from '@/components/Common'

import {
  Wrapper,
  MediaHintWrapper,
  HintIcon,
  HintText,
  PreviewWrapper,
  PreviewText,
  PreviewIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DigestSentence:index')

type TProps = {
  testid?: string
  children: React.ReactNode
  onPreview: () => void
  top?: number
  bottom?: number
  left?: number
  right?: number
}

const DigestSentence: React.FC<TProps> = ({
  testid = 'digest-sentence',
  children = '可能是最性感的开发者社区，来为你心爱的作品建立...',
  onPreview = log,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => {
  return (
    <Wrapper
      testid={testid}
      onClick={onPreview}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {children}
      <Space left={8} />
      <MediaHintWrapper>
        <HintIcon src={`${ICON}/shape/image.svg`} />
        <HintText>3</HintText>
      </MediaHintWrapper>
      <MediaHintWrapper>
        <HintIcon src={`${ICON}/shape/video.svg`} />
        <HintText>1</HintText>
      </MediaHintWrapper>
      <PreviewWrapper>
        <PreviewText>预览</PreviewText>
        <PreviewIcon src={`${ICON}/shape/arrow-simple.svg`} />
      </PreviewWrapper>
    </Wrapper>
  )
}

export default React.memo(DigestSentence)
