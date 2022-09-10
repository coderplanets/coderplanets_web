import dynamic from 'next/dynamic'

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
