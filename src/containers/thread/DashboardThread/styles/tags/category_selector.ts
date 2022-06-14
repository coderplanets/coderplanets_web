import styled from 'styled-components'

import Button from '@/widgets/Buttons/Button'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-start')};
  margin-bottom: 30px;
  margin-top: 1px;
`
export const Hint = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-top: 2px;
  width: 50px;
`
export const CatsWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: 15px;
`
export const CatButton = styled(Button)`
  margin-bottom: 10px;
`
