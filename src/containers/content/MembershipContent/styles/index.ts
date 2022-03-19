import styled from 'styled-components'

import type { TTestable, TActive, TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-center')};
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const BannerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  height: 30vh;
  width: 100%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 22px;
  font-weight: bold;
  margin-top: -20px;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-bottom: 15px;

  ${css.media.mobile`
    text-align: center;
    padding: 0 50px;
    margin-bottom: 30px;
  `};
`
export const PayButtonWrapper = styled.div`
  position: relative;
`
export const InviteCodeWrapper = styled.div`
  color: #196781;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    color: ${theme('button.primary')};
    cursor: pointer;
  }

  transition: color 0.25s;
`
export const ContentWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('justify-between')};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};

  ${css.media.mobile`
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-x: scroll;
  `};
`
export const Dashboard = styled.div<TActive>`
  position: relative;
  ${css.flexColumn('align-center')};
  width: 260px;
  min-height: 380px;
  padding: 20px 10px;
  padding-bottom: 30px;
  border: 2px solid;
  border-color: ${({ active }) =>
    active ? theme('button.primary') : 'transparent'};
  border-radius: 5px;
  box-shadow: ${({ active }) =>
    active ? '1px 1px 20px 0px rgb(37 37 37 / 42%)' : 'none'};

  cursor: pointer;
  transition: all 0.2s;
`
export const CheckerWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`
export const TypeDesc = styled.div<TActive>`
  text-align: center;
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  width: 200px;
  margin-top: 8px;

  opacity: ${({ active }) => (active ? 1 : 0.85)};

  ${Dashboard}:hover & {
    opacity: 1;
  }

  transition: all 0.2s;
`
export const TitleDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 80%;
  margin-top: 18px;
  margin-bottom: 20px;
  opacity: 0.4;
`
export const ItemsWrapper = styled.div`
  text-align: left;
`
export const PayBtnWrapper = styled.div<TActive>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`
export const FreeNote = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 110px;
  text-align: center;
`
