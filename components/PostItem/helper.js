export const getOpacity = (entry, active, accountInfo) => {
  const { isLogin, customization: { markViewed } } = accountInfo
  const { viewerHasViewed } = entry

  if (active.id) {
    return entry.id !== active.id ? 0.6 : 1
  }
  if (isLogin && markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const holder = 1
