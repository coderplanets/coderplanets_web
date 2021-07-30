import dynamic from 'next/dynamic'

export const CollectionFolder = dynamic(
  () => import('@/containers/tool/CollectionFolder'),
  {
    ssr: false,
  },
)

export const FixedHeader = dynamic(() => import('./FixedHeader'), {
  ssr: false,
})
