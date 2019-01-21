import styled from 'styled-components'

import Img from 'components/Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 30px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('preview.articleBg')};
`

export const LockIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 10px;
  margin-top: -4px;
`

export const Message = styled.div`
  color: ${theme('thread.articleTitle')};
`
