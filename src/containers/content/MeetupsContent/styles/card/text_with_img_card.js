import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export {
  ContentsWrapper,
  Label,
  Title,
  Desc,
  FooterWrapper,
  Company,
  Icon,
} from './index'

import { Wrapper as WrapperBase } from './index'

export const Wrapper = styled(WrapperBase)`
  padding-right: 38px;
`
export const Header = styled.div`
  ${cs.flex('align-start')};
`
export const TitleWrapper = styled.div`
  flex-grow: 1;
`
export const Body = styled.div`
  ${cs.flex()};
`
export const PreviewImg = styled(Img)`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  display: block;
  margin-left: 13px;
`
