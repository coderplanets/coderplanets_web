import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  background: ${theme('preview.articleBg')};
  min-height: 200px;
  height: 100%;
  border-color: ${theme('preview.articleBg')};
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
