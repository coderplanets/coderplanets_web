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
  margin-top: 40px;
  padding: 0;
`
export const CommunityWrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 30px;
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(36)};
  border-radius: 5px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  font-size: 14px;
  margin-bottom: 25px;
  padding: 0 30px;
`
