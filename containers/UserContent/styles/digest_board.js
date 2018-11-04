import styled from 'styled-components'

import Img from '../../../components/Img'
/* import { Img } from '../../../components' */
import { theme, cs } from '../../../utils'

export const CardWrapper = styled.div`
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  padding: 20px;
  padding-bottom: 10px;
  min-height: 100px;
  margin-bottom: 15px;
`
export const AttactWrapper = styled.div`
  ${cs.flex('align-center')};
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  margin-left: 10px;
`

export const AttactIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 5px;
  margin-top: 4px;
  height: 15px;
  width: 15px;
`

export const AttactLink = styled.a`
  text-decoration: underline;
  font-weight: bolder;
  transition: color 0.3s;
  color: ${theme('banner.desc')};

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
