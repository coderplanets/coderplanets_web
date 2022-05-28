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
const log = buildLog('c:ArticleCatState:index')

export type TProps = {
  testid?: string
  type?: TArticleCat
  state?: TArticleState
  kanbanLayout?: boolean
  smaller?: boolean
  // size?
} & TSpace

const ArticleCatState: FC<TProps> = ({
  testid = 'article-cat-state',
  type = ARTICLE_CAT.DEFAULT,
  state = ARTICLE_STATE.DEFAULT,
  kanbanLayout = false,
  smaller = true,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      {type && <State state={state} type={type} smaller={smaller} />}
      {type && (
        <Label
          type={type}
          state={state}
          kanbanLayout={kanbanLayout}
          smaller={smaller}
        />
      )}
    </Wrapper>
  )
}

export default memo(ArticleCatState)
