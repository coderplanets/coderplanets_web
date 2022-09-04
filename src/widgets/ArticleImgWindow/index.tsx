/*
 *
 * ArticleImgWindow
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { Wrapper, Block } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArticleImgWindow:index')

type TProps = {
  testid?: string
}

const ArticleImgWindow: FC<TProps> = ({ testid = 'article-img-window' }) => {
  return (
    <Wrapper testid={testid}>
      <Block />
      <Block />
    </Wrapper>
  )
}

export default memo(ArticleImgWindow)
