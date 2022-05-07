export type TLinksData = {
  link: string
  html: string
  md: string
  orgMode: string
}

export type TShareData = {
  url: string
  title: string
  digest: string
}

export type TMenu = 'copy-link' | 'email' | 'wechat' | 'more'
