import type { TBlog, TC11N, TID } from '@/spec'

export const getOpacity = (
  entry: TBlog,
  activeId: TID | null,
  c11n: TC11N,
): number => {
  const { viewerHasViewed } = entry

  if (activeId) {
    return entry.id !== activeId ? 0.6 : 1
  }
  if (c11n.isLogin && c11n.markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
