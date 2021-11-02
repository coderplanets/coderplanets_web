import styled from 'styled-components'

import Input from '@/widgets/Input'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
// import animate from '@/utils/animations'

import LaptopSVG from '@/icons/Laptop'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const LaptopIcon = styled(LaptopSVG)`
  ${css.size(32)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 2px;

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
  transition: fill 0.2s;
`
export const CompanyInput = styled(Input)`
  border: none;
  color: #139c9e;
  background: none;
  height: 26px;

  &::placeholder {
    color: #4e7074;
  }
`
export const LinkInput = styled(Input)`
  display: block;
  border: none;
  border-left: 2px solid;
  border-right: 2px solid;
  border-radius: 5px;
  border-color: #1b4d53;
  background: none;
  color: #486368;
  padding: 2px 8px;
  height: 20px;
  font-size: 13px;

  &::placeholder {
    color: #4a7073;
    font-size: 12px;
  }
`
