import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div``

export const CommentsWrapper = styled.div`
  min-height: 200px;
  margin-top: 20px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 10%;
  border-radius: 5px;
`

export const BodyHeaderWrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  background-color: ${theme('preview.articleBg')};
  width: 100%;
  padding: 8px 32px;
`
