import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { FadeToggle } from '@/widgets/Common'

export const Wrapper = styled.div`
  padding: 0 8px;
`
export const BodyWrapper = styled.div`
  padding: 20px 0;
  min-height: 300px;
  margin-top: 5px;
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
      return '123px;'
    }
    case 1: {
      return '123px;'
    }
    case 2: {
      return '118px;'
    }
    default: {
      return '111px;'
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
  bottom: 20px;
  left: 65px;
  width: 140px;
  height: 400px;
  padding-left: 17px;
  opacity: 0;

  &:hover {
    opacity: ${({ show }) => (show ? 1 : 0)};
  }
  transition: opacity 0.2s;
`
