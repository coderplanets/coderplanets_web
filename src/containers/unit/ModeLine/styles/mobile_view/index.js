import styled from 'styled-components'

import Img from '@/components/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: fixed;
  left: 0;
  bottom: 0px;
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  width: 100%;
  height: 40px;
  background: #0e3b4a;
  z-index: 1;
  /* opacity: 0.7; */
  padding: 0 6vw;
  /* modal shadow */
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
`
export const CommunityLogo = styled(Img)`
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  width: 22px;
  height: 22px;
  display: block;
`
export const Info = styled.div`
  width: 25%;
`
export const ItemsWrapper = styled.div`
  ${cs.flex('justify-between', 'align-center')};
  width: 100%;
  height: 100%;
  /* border: 1px solid tomato; */
`
export const Item = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  /* margin-right: 15px; */

  :last-child {
    margin-right: 0;
  }
`
