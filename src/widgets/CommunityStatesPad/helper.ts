import type { TCommunity } from '@/spec'

export const getContentCount = (community: TCommunity): number => {
  const { meta } = community
  const { postsCount, jobsCount, worksCount, blogsCount, radarsCount } = meta

  return postsCount + jobsCount + worksCount + blogsCount + radarsCount
}

export const holder = 1
