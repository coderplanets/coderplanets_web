import styled from 'styled-components'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-around')};
  color: ${theme('thread.articleDigest')};
`
export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('banner.desc')};
  opacity: 0.4;
`
export const NumWrapper = styled.div`
  ${css.flexColumn()};
  text-align: center;
`
export const RepTitle = styled.div`
  font-size: 0.8rem;
`
export const NumTitle = styled(RepTitle)`
  ${NumWrapper}:hover & {
    color: ${theme('contrastFg')};
    cursor: pointer;
  }
`
export const RepNumber = styled.div`
  font-size: 1.5rem;
`
export const NumNumber = styled(RepNumber)`
  ${NumWrapper}:hover & {
    color: ${theme('contrastFg')};
    cursor: pointer;
  }
`
