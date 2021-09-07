import dynamic from 'next/dynamic'

export const LavaLampLoading = dynamic(
  () => import('@/components/Loading/LavaLampLoading'),
  { ssr: false },
)

export const EmptyThread = dynamic(() => import('@/components/EmptyThread'), {
  ssr: false,
})

export const EmptyLabel = dynamic(() => import('@/components/EmptyLabel'), {
  ssr: false,
})
