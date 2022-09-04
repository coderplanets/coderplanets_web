/*
 *
 * DigestSentence
 *
 */

import { FC, ReactNode, memo, useRef, useEffect, useState } from 'react'

import type { TSizeSM, TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'
import { SIZE } from '@/constant'

// import { ICON } from '@/config'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Text,
  HintWrapper,
  FixedHintWrapper,
  // MediaHintWrapper,
  // HintIcon,
  // HintText,
  PreviewWrapper,
  PreviewText,
  ThunderIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:DigestSentence:index')

type TProps = {
  testid?: string
  children: ReactNode
  size?: TSizeSM
  interactive?: boolean
  lineClamp?: number
  onPreview: () => void
} & TSpace

const DigestSentence: FC<TProps> = ({
  testid = 'digest-sentence',
  children = '可能是最性感的开发者社区，来为你心爱的作品建立...',
  lineClamp = 2,
  onPreview = log,
  size = SIZE.SMALL,
  interactive = true,
  ...restProps
}) => {
  const textRef = useRef(null)
  const [fold, setFold] = useState(false)

  useEffect(() => {
    if (textRef) {
      const { scrollHeight, clientHeight } = textRef.current
      // console.log('clientHeight: ', clientHeight)
      // console.log('scrollHeight: ', scrollHeight)
      // console.log('scrollHeight - clientHeight: ', scrollHeight - clientHeight)
      // 确保只有超过两行才是折叠的情况
      scrollHeight - clientHeight >= 21 ? setFold(true) : setFold(false)
    }
  }, [textRef])

  const Hint = fold ? FixedHintWrapper : HintWrapper

  return (
    <Wrapper
      testid={testid}
      onClick={() => interactive && onPreview()}
      size={size}
      interactive={interactive}
      {...restProps}
    >
      <Text ref={textRef} lineClamp={lineClamp}>
        {children}
        <Space left={6} />
        {interactive && (
          <Hint>
            {/* <MediaHintWrapper>
            <HintIcon src={`${ICON}/shape/image.svg`} />
            <HintText>3</HintText>
          </MediaHintWrapper>
          <MediaHintWrapper>
            <HintIcon src={`${ICON}/shape/video.svg`} />
            <HintText>1</HintText>
          </MediaHintWrapper> */}
            <PreviewWrapper>
              <PreviewText>预览</PreviewText>
              <ThunderIcon />
            </PreviewWrapper>
          </Hint>
        )}
      </Text>
    </Wrapper>
  )
}

export default memo(DigestSentence)
