export const mediaBreakPoints = {
  // mobileS: '320px',
  // mobileM: '375px',
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1400,
  maxContent: 1520, // WIDTH.COMMUNITY.PAGE
  desktop: 1600,
  // currently used as forms of drawer content (slideout/modal)
  desktopL: 1920,
}

// PAGE: 页面宽度 (不包括背景图) for footer, header etc
// CONTENT: 内容宽度
export const WIDTH = {
  COMMUNITY: {
    PAGE: '1320px',
    CONTENT: '1024px',
    CONTENT_OFFSET: '34px',
    LAPTOP_M_PADDING: '0',
  },
  USER: {
    PAGE: '1380px',
    CONTENT: '1024px',
  },
  EXPLORE: {
    CONTENT: '1100px',
  },
  ARTICLE: {
    PAGE: '1460px',
    CONTENT: '630px',
    CONTENT_OFFSET: '290px',
    CONTENT_OFFSET_LAPTOPL: '260px',
    CONTENT_OFFSET_DESKTOPL: '400px',
    STICKER: '240px',
    STICKER_LAPTOPL: '220px',
  },
  BLOG_ARTICLE: {
    PAGE: '1460px',
    CONTENT: '630px',
    CONTENT_OFFSET: '290px',
    CONTENT_OFFSET_LAPTOPL: '260px',
    CONTENT_OFFSET_DESKTOPL: '400px',
    STICKER: '260px',
    STICKER_LAPTOPL: '240px',
  },
  WORKS_ARTICLE: {
    PAGE: '1460px',
    CONTENT: '615px',
    CONTENT_OFFSET: '180px',
    CONTENT_OFFSET_LAPTOPL: '150px',
    CONTENT_OFFSET_DESKTOPL: '280px',
    STICKER: '260px',
    STICKER_LAPTOPL: '260px',
  },
  WORKS: {
    CONTENT: '1100px',
  },
  COOL_GUIDE: {
    CONTENT: '1150px',
    LAPTOP_M_PADDING: '45px',
  },
  RECIPES: {
    CONTENT: '1150px',
    LAPTOP_M_PADDING: '45px',
  },
  MEETUPS: {
    CONTENT: '1150px',
  },

  HAVE_A_DRINK: {
    CONTENT: '1120px',
    LAPTOP_M_PADDING: '15px',
  },
  TREADING: {
    CONTENT: '1120px',
  },

  SPONSOR: {
    PAGE: '1460px',
    CONTENT: '1080px',
  },

  MEMBERSHIP: {
    CONTENT: '1080px',
  },

  SUPPORT_US: {
    PAGE: '1460px',
    CONTENT: '1080px',
  },

  ARTICLE_EDITOR: {
    PAGE: '1460px',
    CONTENT: '1024px',
  },

  HELP_CENTER: {
    PAGE: '1460px',
    CONTENT: '1024px',
    CONTENT_OFFSET: '10px',
  },
}
