import dynamic from 'next/dynamic'

export const LavaLampLoading = dynamic(
  () => import('@/widgets/Loading/LavaLampLoading'),
  { ssr: false },
)

export const EmptyThread = dynamic(() => import('@/widgets/EmptyThread'), {
  ssr: false,
})

export const EmptyLabel = dynamic(() => import('@/widgets/EmptyLabel'), {
  ssr: false,
})
