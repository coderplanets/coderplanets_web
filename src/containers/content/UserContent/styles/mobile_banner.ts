import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  padding: 20px;
`
export const Avatar = styled(Img)`
  ${css.size(60)};
  border-radius: 42%;
`
export const Intro = styled.div`
  margin-left: 18px;
`
export const NickName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const Bio = styled.div`
  ${css.lineClamp(2)}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
