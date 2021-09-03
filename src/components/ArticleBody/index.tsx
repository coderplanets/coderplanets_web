/* eslint-disable react/no-danger */
/*
 * ArticleBody
 */
import { FC, memo, useRef, useState, useEffect } from 'react'

import type { TDocument } from '@/spec'
import { buildLog } from '@/utils/logger'

import FoldBox from './FoldBox'
import { Br } from '@/components/Common'

import { Wrapper, Body, HTML } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleBody:index')

type TProps = {
  testid?: string
  document: TDocument
  // 超过多行就默认折叠
  initLineClampNum?: number
}

const ArticleBody: FC<TProps> = ({
  testid = 'article-body',
  document,
  initLineClampNum = 5,
}) => {
  const bodyRef = useRef(null)
  const [fold, setFold] = useState(false)
  const [needFold, setNeedFold] = useState(false)
  const [lineClampNum, setLineClampNum] = useState(initLineClampNum)

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
      <Body ref={bodyRef} lineClampNum={lineClampNum}>
        <HTML
          dangerouslySetInnerHTML={{
            __html: document.bodyHtml,
          }}
        />
      </Body>

      {needFold ? (
        <FoldBox
          fold={fold}
          onFold={() => {
            setLineClampNum(initLineClampNum)
            setFold(true)
          }}
          onExpand={() => {
            setLineClampNum(0)
            setFold(false)
          }}
        />
      ) : (
        <Br bottom={50} />
      )}
    </Wrapper>
  )
}

export default memo(ArticleBody)
