export const SITE_SHARE_TYPE = {
  EMBED: 'embed',
  LINKS: 'links',
  WECHAT: 'wechat',
}

export const OUTSIDE_SHARE_TYPE = {
  TWITTER: 'twitter',
  EMAIL: 'email',
  WECHAT: 'wechat',
  TELEGRAM: 'telegram',
  WEIBO: 'weibo',
  DOUBAN: 'douban',
  FACEBOOK: 'facebook',
}

export const SHARE_TYPE = {
  ...SITE_SHARE_TYPE,
  ...OUTSIDE_SHARE_TYPE,
}

export const MENU = {
  COPY_LINK: 'copy-link',
  EMAIL: OUTSIDE_SHARE_TYPE.EMAIL,
  QR_CODE: 'qr-code',
  MORE: 'more',
}
