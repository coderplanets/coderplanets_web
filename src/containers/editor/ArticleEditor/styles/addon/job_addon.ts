import styled from 'styled-components'

import Input from '@/widgets/Input'
import css, { theme } from '@/utils/css'

import LaptopSVG from '@/icons/Laptop'
import LinkSVG from '@/icons/Link'

export { LinkInput } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const LaptopIcon = styled(LaptopSVG)`
  ${css.size(16)};
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
  width: 100px;

  &::placeholder {
    color: #4e7074;
  }
`
export const LinkIcon = styled(LinkSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
  transition: fill 0.2s;
`
