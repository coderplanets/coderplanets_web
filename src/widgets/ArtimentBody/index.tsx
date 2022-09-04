/* eslint-disable react/no-danger */
/*
 * ArtimentBody
 */
import { FC, memo, useRef, useState, useEffect } from 'react'

import type { TDocument } from '@/spec'
import { buildLog } from '@/utils/logger'

import FoldBox from './FoldBox'
import { Br } from '@/widgets/Common'

import { Wrapper, Body, HTML } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArtimentBody:index')

type TProps = {
  testid?: string
  document: TDocument
  // 超过多行就默认折叠
  initLineClamp?: number
  mode?: 'article' | 'comment'
}

const ArtimentBody: FC<TProps> = ({
  testid = 'article-body',
  document,
  initLineClamp = 15,
  mode = 'article',
}) => {
  const bodyRef = useRef(null)
  const [fold, setFold] = useState(false)
  const [needFold, setNeedFold] = useState(false)
  const [lineClamp, setLineClamp] = useState(initLineClamp)

  useEffect(() => {
    if (bodyRef) {
      const { scrollHeight, clientHeight } = bodyRef.current
      // console.log('clientHeight: ', clientHeight)
      // console.log('scrollHeight: ', scrollHeight)
      // 确保只有超过两行才是折叠的情况
      if (scrollHeight - clientHeight > 22) {
        setNeedFold(true)
        setFold(true)
      } else {
        setNeedFold(false)
        setFold(false)
      }
    }
  }, [bodyRef])

  return (
    <Wrapper testid={testid}>
      <Body ref={bodyRef} lineClamp={lineClamp} mode={mode}>
        <HTML
          dangerouslySetInnerHTML={{
            __html: document.bodyHtml,
          }}
        />
      </Body>

      {needFold ? (
        <FoldBox
          fold={fold}
          mode={mode}
          onFold={() => {
            setLineClamp(initLineClamp)
            setFold(true)
          }}
          onExpand={() => {
            setLineClamp(0)
            setFold(false)
          }}
        />
      ) : (
        <Br bottom={mode === 'article' ? 0 : 15} />
      )}
    </Wrapper>
  )
}

export default memo(ArtimentBody)
