import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  width: 100%%;
`
export const Title = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 10px;
`
export const PublishDateInfo = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${css.circle(25)};
  margin-right: 5px;
`
