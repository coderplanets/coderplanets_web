/*
 *
 * ArticleCatState
 *
 */

import { FC, memo } from 'react'

import type { TSpace, TArticleCat, TArticleState } from '@/spec'
import { ARTICLE_CAT, ARTICLE_STATE } from '@/constant'
import { buildLog } from '@/utils/logger'

import State from './State'
import Label from './Label'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArticleCatState:index')

export type TProps = {
  testid?: string
  cat?: TArticleCat
  state?: TArticleState
  kanbanLayout?: boolean
  smaller?: boolean
  // size?
} & TSpace

const ArticleCatState: FC<TProps> = ({
  testid = 'article-cat-state',
  cat = ARTICLE_CAT.DEFAULT,
  state = ARTICLE_STATE.DEFAULT,
  kanbanLayout = false,
  smaller = true,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      {cat && <State state={state} cat={cat} smaller={smaller} />}
      {cat && (
        <Label
          cat={cat}
          state={state}
          kanbanLayout={kanbanLayout}
          smaller={smaller}
        />
      )}
    </Wrapper>
  )
}

export default memo(ArticleCatState)
