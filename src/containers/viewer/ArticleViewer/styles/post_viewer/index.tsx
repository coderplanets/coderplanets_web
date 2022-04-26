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
  font-size: 19px;
  margin-left: 10px;
  margin-top: -2px;

  &:before {
    content: '#';
    margin-top: 1px;
    margin-right: 2px;
    font-size: 17px;
  }
`
