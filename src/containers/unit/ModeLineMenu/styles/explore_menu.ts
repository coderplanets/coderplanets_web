import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  width: 100%;
  min-height: 150px;
  margin-top: 30px;
  padding: 0;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  height: 50px;
  width: 100%;
  padding-left: 10px;
  padding-right: 14px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const CommunityWrapper = styled.div`
  width: 100%;
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 50px;
`
export const CommunityCard = styled.div<{ margin: boolean }>`
  ${css.flex('align-center')};
  padding-left: 15px;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 10px;
  background: #023744;
  width: 48%;
  margin-left: ${({ margin }) => (margin ? '10px' : 0)};
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  ${css.size(15)};
`
export const CommunityTitle = styled.div`
  font-size: 14px;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('100px')}
`
