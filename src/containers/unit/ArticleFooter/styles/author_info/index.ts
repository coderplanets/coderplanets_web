import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-between')};
  border-top: 1px solid;
  border-bottom: 3px solid;
  border-color: #004250;
  padding: 26px 5px;
  padding-bottom: 32px;

  color: ${theme('thread.articleDigest')};
`
export const TextIntro = styled.div`
  ${css.flexColumn('justify-start')};
  width: 60%;
`
export const IntroTitle = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Name = styled.div`
  ${css.flex('align-center')};
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-top: 4px;
  margin-bottom: 10px;
`
export const Bio = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const AvatarIntro = styled.div`
  ${css.flexColumn('justify-start', 'align-center')};
  width: 60px;
  margin-top: 2px;
`
export const Avatar = styled(Img)`
  ${css.circle(38)};
  margin-bottom: 16px;
`
