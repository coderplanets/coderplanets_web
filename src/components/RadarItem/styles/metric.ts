import type { TRadar, TC11N, TID } from '@/spec'

export const getOpacity = (
  entry: TRadar,
  activeId: TID,
  c11n: TC11N,
): number => {
  const { isLogin, markViewed } = c11n
  const { viewerHasViewed } = entry

  if (activeId) {
    return entry.id !== activeId ? 0.6 : 1
  }
  if (isLogin && markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
