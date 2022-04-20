import styled from 'styled-components'

import { Divider } from '@/widgets/Common'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 380px;
  height: 300px;
  margin-top: 50px;
  margin-bottom: 60px;
`

export const LineDivider = styled(Divider)`
  margin-bottom: 50px;
`
export const Block = styled.div`
  ${css.flex('align-center')};
  padding: 0 25px;
`
export const Logo = styled(Img)`
  ${css.size(50)};
`
export const Intro = styled.div`
  margin-left: 20px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 17px;
`
export const Desc = styled.div`
  ${css.lineClamp(2)}
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
