import type { TBlog, TC11N } from '@/spec'

export const getOpacity = (entry: TBlog, c11n: TC11N): number => {
  const { viewerHasViewed } = entry

  if (c11n.isLogin && c11n.markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
