import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('justify-center')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  min-height: 172px;
`
export const Header = styled.div`
  margin-bottom: 12px;
  margin-top: 8px;
  margin-left: 5px;
`
export const LinkCardWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 10px;
  padding: 8px 5px;
  background: #0b2f3a;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border-color: ${theme('thread.articleDigest')};
  }
  transition: all 0.25s;
`
export const Avatar = styled(Img)`
  ${cs.circle('24px')};
  display: block;
`
export const Digest = styled.div`
  ${cs.flexColumnGrow('align-start')};
  margin-left: 10px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: -2px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 22px;
  height: 22px;
  display: block;
  transform: rotate(180deg);

  ${LinkCardWrapper}:hover & {
    width: 24px;
    height: 24px;
    fill: ${theme('thread.articleTitle')};
  }
`
