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
    case 'tiny': {
      return '13px'
    }
    case 'small': {
      return '14px'
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
    case 'tiny': {
      return '12px'
    }
    default: {
      return '13px'
    }
  }
}

const getMargin = size => {
  switch (size) {
    case 'tiny': {
      return '2px'
    }
    default: {
      return '4px'
    }
  }
}

export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  margin-right: ${({ size, margin }) => margin || getMargin(size)};
  display: block;
  border-radius: ${({ round }) => (round ? '100%' : '0')};
`
export const Text = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getTextSize(size)};
`
