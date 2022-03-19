import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow('align-center')};
  margin-top: 30px;
  width: 80%;
`
export const Desc = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
  color: ${theme('thread.articleDigest')};
`
export const BtnWrapper = styled.div`
  align-self: flex-end;
  margin-top: 120px;
`
