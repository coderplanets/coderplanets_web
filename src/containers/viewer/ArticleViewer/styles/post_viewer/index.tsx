import styled from 'styled-components'

import { theme } from '@/utils/css'

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
      return '133px;'
    }
    case 1: {
      return '130px;'
    }
    case 2: {
      return '128px;'
    }
    default: {
      return '120px;'
    }
  }
}

type TUpvoteWrapper = {
  show: boolean
  count: number
}

export const UpvoteWrapper = styled.div<TUpvoteWrapper>`
  position: fixed;
  top: 100px;
  left: ${({ count }) => getLeftOffset(count)};
  opacity: ${({ show }) => (show ? 1 : 0)};

  transition: opacity 0.5s;
`
