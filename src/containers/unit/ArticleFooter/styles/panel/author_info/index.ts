import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
`
export const ContentWrapper = styled.div`
  ${css.flex('justify-between')};
`
export const TextIntro = styled.div`
  ${css.flexColumn('justify-start')};
  width: 60%;
`
export const FromHint = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
  opacity: 0.7;
`
export const Name = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 17px;
`
export const Bio = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  ${css.lineClamp(2)};
`
export const AvatarIntro = styled.div`
  ${css.flexColumn('justify-start', 'align-end')};
  min-width: 60px;
  margin-top: 2px;
`
export const Avatar = styled(Img)`
  ${css.circle(30)};
  margin-bottom: 22px;
  margin-right: 15px;
`
