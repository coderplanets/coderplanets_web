/*
 * ArticleMenu
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import RealArticleMenu from './RealArticleMenu'

type TProps = {
  testid?: string
}

// const RealArticleMenu = dynamic(() => import('./RealArticleMenu'), {
//   ssr: false,
// })

const ArticleMenu: FC<TProps> = ({ testid = 'archived-sign' }) => {
  return <RealArticleMenu testid={testid} />
}

export default memo(ArticleMenu)
