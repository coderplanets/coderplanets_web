import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { FadeToggle } from '@/widgets/Common'

export const Wrapper = styled.div``
export const BodyWrapper = styled.div`
  min-height: 200px;
  margin-top: 22px;
  margin-bottom: 14px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 25px;
`
export const SubTitle = styled.span`
  display: inline-block;
  color: ${theme('thread.articleTitle')};
  opacity: 0.4;
  font-size: 22px;
  margin-left: 10px;
  margin-top: -2px;

  &:before {
    content: '#';
    margin-top: 1px;
    margin-right: 3px;
    font-size: 19px;
  }
`

const getLeftOffset = (count: number): string => {
  switch (count) {
    case 0: {
      return '128px;'
    }
    case 1: {
      return '127px;'
    }
    case 2: {
      return '123px;'
    }
    default: {
      return '118px;'
    }
  }
}

type TUpvoteWrapper = {
  show: boolean
  count: number
}

export const UpvoteWrapper = styled(FadeToggle)<TUpvoteWrapper>`
  position: fixed;
  top: 100px;
  left: ${({ count }) => getLeftOffset(count)};
`

export const GoTopWrapper = styled.div<{ show: boolean }>`
  ${css.flex('align-end', 'justify-center')};
  position: fixed;
  bottom: 40px;
  left: 102px;
  width: 60px;
  height: 40px;
  opacity: 0.8;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
