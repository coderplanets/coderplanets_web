import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow('align-center')};
  margin-top: 30px;
  width: 80%;
`
export const Desc = styled.div`
  ${cs.flex('align-center')};
  margin-top: 10px;
  color: ${theme('thread.articleDigest')};
`
export const BtnWrapper = styled.div`
  align-self: flex-end;
  margin-top: 120px;
`
