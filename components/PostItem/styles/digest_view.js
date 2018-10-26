import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ContentWrapper = styled.div`
  display: flex;
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 3px;
`
