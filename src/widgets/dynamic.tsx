import dynamic from 'next/dynamic'

export const ArticleReadLabel = dynamic(() => import('./ArticleReadLabel'), {
  ssr: false,
})

export const ArticlePinLabel = dynamic(() => import('./ArticlePinLabel'), {
  ssr: false,
})

export const LavaLampLoading = dynamic(
  () => import('./Loading/LavaLampLoading'),
  {
    ssr: false,
  },
)

export const ArchiveAlert = dynamic(() => import('./ArchiveAlert'), {
  ssr: false,
})

export const ArchivedSign = dynamic(() => import('./ArchivedSign'), {
  ssr: false,
})

export const IllegalWarning = dynamic(() => import('./IllegalWarning'), {
  ssr: false,
})

export const TrendLine = dynamic(() => import('./TrendLine'), {
  ssr: false,
})
