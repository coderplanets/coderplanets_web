import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const Item = styled.div`
  color: ${theme('editor.footer')};
  display: flex;
  align-items: center;
`
export const Hightlight = styled.div`
  color: ${theme('contrastFg')};
`
