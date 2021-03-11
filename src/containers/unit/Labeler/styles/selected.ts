import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  color: ${theme('editor.footer')};
`
export const Hightlight = styled.div`
  color: ${theme('contrastFg')};
`
