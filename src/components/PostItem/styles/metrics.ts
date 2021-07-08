import type { TPost, TC11N } from '@/spec'

export const getOpacity = (
  entry: TPost,
  active: TPost | null,
  isLogin: boolean,
  c11n: TC11N,
): number => {
  const { viewerHasViewed } = entry

  if (active?.id) {
    return entry.id !== active?.id ? 0.6 : 1
  }
  if (isLogin && c11n.markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
