import styled from 'styled-components'

// import type { TTestable } from '@/spec'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 200px;
  min-height: 100px;
`
export const CommunityLogo = styled(Img)`
  ${css.size(30)};
`
export const SubsCount = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Info = styled.div`
  ${css.flexColumn()};
  margin-left: 12px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const Title = styled.a`
  text-decoration: none;
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
