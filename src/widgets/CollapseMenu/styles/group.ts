import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div``

export const TagsWrapper = styled.div``

export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-left: 3px;
  &:hover {
    cursor: pointer;
    /* opacity: 0.65; */
  }
`
export const ArrowIcon = styled(Img)<{ $isOpen: boolean }>`
  fill: ${theme('tags.text')};
  ${css.size(16)};
  opacity: 0.5;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'rotate(270deg)' : 'rotate(180deg)'};
  transition: transform 0.5s;
  ${Header}:hover & {
    opacity: 0.65;
  }
`
export const Title = styled.div`
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
export const Content = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  width: 100%;
  margin-bottom: 15px;
`
export const SubToggle = styled.div`
  ${css.flex('align-center')};
  margin-left: 5px;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
export const SubToggleTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: 12px;
  margin-left: 5px;
  padding: 2px;
  border-radius: 5px;
`
export const SubTogglePrefixIcon = styled(Img)`
  fill: ${theme('tags.text')};
  ${css.size(14)};
  transform: rotate(90deg);
`
