import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('align-start', 'justify-start')};
  width: 400px;
  height: 100%;
  padding: 10px;
  margin: 20px;
  margin-top: 10px;
  margin-left: 100px;
`
export const HeaderTitle = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0.5;
`
export const Didiver = styled.div`
  margin: 25px 0;
  width: 100%;
`
export const Option = styled.div`
  ${cs.flex('align-center')};
  margin-top: 6px;
`
export const OptionIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 18px;
  height: 18px;
  margin-left: 15px;
  display: block;
  opacity: ${({ active }) => (active ? 1 : 0)};

  ${Option}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const OptionText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;

  ${Option}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
