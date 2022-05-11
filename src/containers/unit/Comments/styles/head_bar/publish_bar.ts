import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import EditPenSVG from '@/icons/EditPen'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-top: 15px;
`
export const AccountWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Avatar = styled(Img)`
  ${css.circle(22)};
`
export const UserName = styled.div`
  color: ${theme('thread.articleDIgest')};
  font-size: 14px;
  margin-left: 12px;
`
export const ActionsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const EditIcon = styled(EditPenSVG)`
  ${css.size(12)};
  fill: white;
  margin-right: 5px;
`
