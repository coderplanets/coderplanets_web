/*
 *
 * DigestSentence
 *
 */

import { FC, ReactNode, memo, useRef, useEffect, useState } from 'react'

import type { TSIZE_SM } from '@/spec'
import { SIZE } from '@/constant'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import { Space } from '@/components/Common'

import {
  Wrapper,
  Text,
  HintWrapper,
  FixedHintWrapper,
  MediaHintWrapper,
  HintIcon,
  HintText,
  PreviewWrapper,
  PreviewText,
  ThunderIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DigestSentence:index')

type TProps = {
  testid?: string
  children: ReactNode
  top?: number
  bottom?: number
  left?: number
  right?: number
  size?: TSIZE_SM
  onPreview: () => void
}

const DigestSentence: FC<TProps> = ({
  testid = 'digest-sentence',
  children = '可能是最性感的开发者社区，来为你心爱的作品建立...',
  onPreview = log,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  size = SIZE.SMALL,
}) => {
  const textRef = useRef(null)
  const [fold, setFold] = useState(false)

  useEffect(() => {
    if (textRef) {
      const { scrollHeight, clientHeight } = textRef.current
      // console.log('clientHeight: ', clientHeight)
      // console.log('scrollHeight: ', scrollHeight)
      // 确保只有超过两行才是折叠的情况
      scrollHeight - clientHeight > 22 ? setFold(true) : setFold(false)
    }
  }, [textRef])

  const Hint = fold ? FixedHintWrapper : HintWrapper

  return (
    <Wrapper
      testid={testid}
      onClick={onPreview}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      size={size}
    >
      <Text ref={textRef}>
        {children}
        <Space left={6} />
        <Hint>
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
            <ThunderIcon />
          </PreviewWrapper>
        </Hint>
      </Text>
    </Wrapper>
  )
}

export default memo(DigestSentence)
