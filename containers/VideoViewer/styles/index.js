import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const Wrapper2 = styled.div`
  padding: 20px;
  background: ${theme('preview.articleBg')};
  min-height: 600px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
  flex-direction: column;
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`

export const CommentsWrapper = styled.div`
  min-height: 600px;
  margin-top: 20px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 10%;
  border-radius: 5px;
`
