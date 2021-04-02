import type { TPost, TAccount } from '@/spec'

export const getOpacity = (
  entry: TPost,
  active: TPost | null,
  accountInfo: TAccount,
): number => {
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo
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
