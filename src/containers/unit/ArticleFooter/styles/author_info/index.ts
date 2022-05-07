import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  position: relative;
  border-top: 1px solid;
  border-bottom: 3px solid;
  border-color: ${theme('border')};
  padding: 26px 5px;
  padding-bottom: 32px;
  margin-top: 72px;
  margin-bottom: 42px;

  color: ${theme('thread.articleDigest')};
`
export const TabsWrapper = styled.div`
  position: absolute;
  top: -36px;
  left: -15px;
`
export const ReportWrapper = styled.div`
  position: absolute;
  top: -33px;
  right: 18px;
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const ContentWrapper = styled.div`
  ${css.flex('justify-between')};
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
  ${css.circle(33)};
  margin-bottom: 16px;
`
