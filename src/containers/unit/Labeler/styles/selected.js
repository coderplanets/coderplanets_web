import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const Item = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('editor.footer')};
`
export const Hightlight = styled.div`
  color: ${theme('contrastFg')};
`
