import type { TPost, TAccountStore } from '@/spec'

export const getOpacity = (
  entry: TPost,
  active: TPost | null,
  account: TAccountStore,
): number => {
  const {
    isLogin,
    user: {
      customization: { markViewed },
    },
  } = account
  const { viewerHasViewed } = entry

  if (active?.id) {
    return entry.id !== active?.id ? 0.6 : 1
  }
  if (isLogin && markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
