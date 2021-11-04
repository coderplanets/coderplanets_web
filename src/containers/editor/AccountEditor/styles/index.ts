import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};

  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  position: relative;
`
export const AvatarPic = styled(Img)`
  ${css.circle(70)};
  margin-bottom: 30px;
`
export const FormsWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-top-color: ${theme('drawer.divider')};
  margin-top: 15px;
  width: 75%;
  margin-bottom: 20px;
`
export const ActionBtns = styled.div``
