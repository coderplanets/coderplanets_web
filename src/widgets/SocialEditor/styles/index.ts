import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'

import TwitterSVG from '@/icons/social/Twitter'
import WeiboSVG from '@/icons/social/Weibo'
import TelegramSVG from '@/icons/social/Telegram'

import Input from '@/widgets/Input'

// import { theme } from '@/utils/themes'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  margin-bottom: 20px;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Inputer = styled(Input)`
  width: 265px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  color: ${theme('thread.extraInfo')};
  opacity: 0.8;
  margin-top: 15px;
`
export const PlatformWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`
const TwitterIcon = styled(TwitterSVG)`
  ${css.size(16)};
  cursor: pointer;
`
const WeiboIcon = styled(WeiboSVG)`
  ${css.size(18)};
  cursor: pointer;
`
const TelegramIcon = styled(TelegramSVG)`
  ${css.size(15)};
  cursor: pointer;
`

export const Icon = {
  Twitter: TwitterIcon,
  Weibo: WeiboIcon,
  Telegram: TelegramIcon,
}
