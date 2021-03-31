import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

import { Wrapper as WrapperBase } from './index'

export {
  ContentsWrapper,
  Label,
  Title,
  Desc,
  FooterWrapper,
  Company,
  Icon,
} from './index'

export const Wrapper = styled(WrapperBase)``
export const Header = styled.div`
  ${css.flex('align-start')};
`
export const TitleWrapper = styled.div`
  flex-grow: 1;
`
export const Body = styled.div`
  ${css.flex()};
`
export const PreviewImg = styled(Img)`
  width: 70px;
  height: 50px;
  border-radius: 2px;
  display: block;
  margin-top: 3px;
  margin-left: 13px;
`
