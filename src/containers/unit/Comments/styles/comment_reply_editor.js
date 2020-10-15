import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

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
  display: block;
  font-size: 1rem;
`
export const PreviewWrapper = styled.div`
  min-height: 200px;
  padding: 0 20px;
`
