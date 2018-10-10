import styled from 'styled-components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('banner.desc')};
  opacity: 0.4;
`
export const NumWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 1.4rem;
  font-weight: bold;
`
export const NumNumber = styled(RepNumber)`
  font-size: 1.4rem;
  font-weight: bold;
  ${NumWrapper}:hover & {
    color: ${theme('contrastFg')};
    cursor: pointer;
  }
`
