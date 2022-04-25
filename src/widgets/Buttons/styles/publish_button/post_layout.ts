import styled from 'styled-components'

// import Img from '@/Img'
import css from '@/utils/css'
import EditPenSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  width: 100%;
`
export const Title = styled.div`
  letter-spacing: 2px;
  font-size: 12px;
  padding-left: 2px;
`
export const EditIcon = styled(EditPenSVG)`
  ${css.size(13)};
  fill: #fff; // to-theme
`
