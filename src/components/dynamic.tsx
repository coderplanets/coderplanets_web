import dynamic from 'next/dynamic'

export const ArticleReadLabel = dynamic(() => import('./ArticleReadLabel'), {
  ssr: false,
})

export const ArticlePinLabel = dynamic(() => import('./ArticlePinLabel'), {
  ssr: false,
})
