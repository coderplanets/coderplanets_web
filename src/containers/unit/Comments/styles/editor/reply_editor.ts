import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  background: ${theme('drawer.articleBg')};
  min-height: 200px;
  height: 100%;
  border-color: ${theme('drawer.articleBg')};
  transition: all 0.3s;
  border-radius: 3px;
`

export const InputEditorWrapper = styled.div`
  min-height: 180px;
  max-height: 60%;
  overflow-y: scroll;
  margin: 0 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`
