import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div``
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`
export const ArrowIcon = styled(Img)<{ isOpen: boolean }>`
  fill: ${theme('tags.text')};
  ${css.size(16)};
  opacity: 0.5;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(270deg)' : 'rotate(180deg)')};
  transition: transform 0.5s;
  ${Header}:hover & {
    opacity: 0.65;
  }
`
export const Title = styled.div`
  ${css.flex('align-center')};
`
export const FolderTitle = styled.div`
  color: ${theme('tags.text')};
  opacity: 0.5;
  margin-left: 4px;
  font-size: 14px;
  margin-right: 8px;
  ${css.cutRest('85px')};

  ${Header}:hover & {
    opacity: 0.65;
  }
`
export const Count = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 2px;

  &:before {
    content: '(';
    margin-right: 2px;
    font-size: 12px;
    color: ${theme('thread.articleDigest')};
  }
  &:after {
    content: ')';
    margin-left: 2px;
    font-size: 12px;
    color: ${theme('thread.articleDigest')};
  }
`

export const Content = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  margin-bottom: 15px;
`
export const SubToggle = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-left: 2px;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
export const SubToggleTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 12px;
  margin-left: 6px;
  padding: 2px;
  border-radius: 5px;
`
export const SubTogglePrefixIcon = styled(Img)`
  fill: ${theme('tags.text')};
  ${css.size(13)};
`
