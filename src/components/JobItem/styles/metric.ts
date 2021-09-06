import type { TJob, TC11N } from '@/spec'

export const getOpacity = (entry: TJob, c11n: TC11N): number => {
  const { isLogin, markViewed } = c11n
  const { viewerHasViewed } = entry

  if (isLogin && markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
