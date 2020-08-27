import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testId': props.testId,
}))`
  ${cs.flexColumn()};
  margin-top: 12px;
`
export const Divider = styled.div`
  height: 1px;
  background: #004352;
  width: calc(100% - 25px);
  margin-top: 15px;
  margin-bottom: 15px;
`
export const TopFilter = styled.div`
  color: ${theme('thread.articleDigest')};
  width: calc(100% - 25px);
`
export const Option = styled.div`
  ${cs.flex('align-center')};
  font-size: 14px;
  padding: 6px;
  background: ${({ active }) => (active ? '#08323e' : 'transparent')};
  border-radius: 6px;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.25s;
`
export const OptionItem = styled.div`
  flex-grow: 1;
`
const OptionIconBase = styled(Img)`
  width: 12px;
  height: 12px;
  display: block;
  opacity: ${({ active }) => (active ? '1' : '0')};

  transition: all 0.25s;
`
export const FavoriteIcon = styled(OptionIconBase)`
  fill: ${theme('baseColor.error')};
`
export const ClockIcon = styled(OptionIconBase)`
  fill: ${theme('thread.articleTitle')};
`
export const OrWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 85%;
`
