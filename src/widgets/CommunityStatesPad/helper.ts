import type { TCommunity } from '@/spec'

// use articlesCount instead
export const getContentCount = (community: TCommunity): number => {
  const { meta } = community
  if (!meta) return 0

  const { postsCount, jobsCount, worksCount, blogsCount, radarsCount } = meta
  return postsCount + jobsCount + worksCount + blogsCount + radarsCount
}

export const holder = 1
