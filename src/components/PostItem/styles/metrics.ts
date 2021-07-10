import type { TPost, TC11N, TID } from '@/spec'

export const getOpacity = (
  entry: TPost,
  activeArticleId: TID | null,
  c11n: TC11N,
): number => {
  const { viewerHasViewed } = entry

  if (activeArticleId) {
    return entry.id !== activeArticleId ? 0.6 : 1
  }
  if (c11n.isLogin && c11n.markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
