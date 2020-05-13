import styled from 'styled-components'

// import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')}
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-top: -10%;
`
export const Block = styled.div`
  ${cs.flexColumn('align-both')}
  width: 200px;
  height: 200px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const ItemsWrapper = styled.div``
export const Item = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }

  &:before {
    content: '';
    display: ${({ active }) => (active ? 'block' : 'none')};
    position: absolute;
    top: 8px;
    left: -12px;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: ${theme('thread.articleTitle')};
  }
`
export const Divider = styled.div`
  height: 100px;
  width: 1px;
  background: #0d4e65;
  margin: 0 50px;
`
