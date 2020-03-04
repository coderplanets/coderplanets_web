import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
`
const getIconSize = size => {
  switch (size) {
    case 'large': {
      return '18px'
    }
    default: {
      return '15px'
    }
  }
}

const getTextSize = size => {
  switch (size) {
    case 'large': {
      return '16px'
    }
    default: {
      return '13px'
    }
  }
}

export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  margin-right: 4px;
  display: block;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};
`
