import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

import { BaseSection } from '.'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Section = styled(BaseSection)``
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 20px;
`
export const SelectWrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const Inputer = styled(Input)`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 300px;
`
