import styled from 'styled-components'

// import type { TTestable } from '@/spec'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 200px;
  min-height: 100px;
  padding: 5px 10px;
`
export const Avatar = styled(Img)`
  ${css.circle(40)};
`
export const ShortBio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 2px;
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
  font-size: 16px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
export const Nickname = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
`
export const Login = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
