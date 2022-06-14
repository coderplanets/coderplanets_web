import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Button from '@/widgets/Buttons/Button'

export const Wrapper = styled.div`
  ${css.flex()};
  padding-right: 30px;
  width: 100%;
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
  margin-bottom: 25px;
  margin-right: 15px;
`
