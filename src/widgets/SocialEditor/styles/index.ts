import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'

import css, { theme } from '@/utils/css'

import GlobalSVG from '@/icons/social/Global'
import WeChatSVG from '@/icons/social/WeChat'
import TwitterSVG from '@/icons/social/Twitter'
import WeiboSVG from '@/icons/social/Weibo'
import QQSVG from '@/icons/social/QQ'
import TelegramSVG from '@/icons/social/Telegram'
import DoubanSVG from '@/icons/social/Douban'
import ZhihuSVG from '@/icons/social/Zhihu'
import SteamSVG from '@/icons/social/Steam'
import GithubSVG from '@/icons/social/Github'
import BiliBiliSVG from '@/icons/social/BiliBili'

// import { theme } from '@/utils/themes'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  margin-bottom: 20px;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-bottom: 12px;
`
export const InputsWrapper = styled.div`
  ${css.flexColumn()};
  gap: 20px 0;
`
export const IconWrapper = styled.div`
  border: 1px solid;
  border-color: ${theme('editor.border')};
  ${css.flex('align-both')};
  width: 38px;
  height: 34px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
`
export const Hint = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-top: 15px;
`
export const PlatformWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  gap: 12px 15px;
  margin-top: 10px;
  background: ${theme('hoverBg')};
  padding: 12px 10px;
  border-radius: 5px;
  width: 300px;
`

const getIcon = (SVG, size = 16) => {
  return styled(SVG)<TActive>`
    ${css.size(size)};
    fill: ${theme('thread.extraInfo')};
    filter: ${({ $active }) => ($active ? 'saturate(1)' : 'saturate(0)')};
    opacity: ${({ $active }) => ($active ? 1 : 0.7)};

    &:hover {
      cursor: pointer;
      filter: saturate(1);
      opacity: 1;
    }
    transition: all 0.2s;
  `
}

export const Icon = {
  Homepage: getIcon(GlobalSVG),
  Wechat: getIcon(WeChatSVG, 15),
  Twitter: getIcon(TwitterSVG),
  Weibo: getIcon(WeiboSVG, 18),
  QQ: getIcon(QQSVG),
  Telegram: getIcon(TelegramSVG, 15),
  Douban: getIcon(DoubanSVG, 15),
  Steam: getIcon(SteamSVG, 14),
  Zhihu: getIcon(ZhihuSVG, 15),
  Github: getIcon(GithubSVG, 15),
  Bilibili: getIcon(BiliBiliSVG, 15),
}
