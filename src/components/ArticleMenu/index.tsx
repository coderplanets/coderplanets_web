/*
 * ArticleMenu
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

// import RealArticleMenu from './RealArticleMenu'

type TProps = {
  testid?: string
  verticalIcon?: boolean
}

const RealArticleMenu = dynamic(() => import('./RealArticleMenu'), {
  ssr: false,
})

const ArticleMenu: FC<TProps> = ({
  testid = 'artile-menu',
  verticalIcon = false,
}) => {
  return <RealArticleMenu testid={testid} verticalIcon={verticalIcon} />
}

export default memo(ArticleMenu)
