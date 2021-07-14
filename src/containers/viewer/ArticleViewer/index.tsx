//

/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import type { TStore } from './store'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  articleViewer?: TStore
  testid: string
}

const ArticleViewerContainer: FC<TProps> = ({
  articleViewer: store,
  testid,
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <h2>ArticleViewer hooks container!</h2>
      <div>impress me!</div>
    </Wrapper>
  )
}

export default pluggedIn(ArticleViewerContainer) as FC<TProps>
