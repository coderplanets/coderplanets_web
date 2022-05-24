import styled from 'styled-components'

import { TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/ArrowSimple'
import MoreSVG from '@/icons/menu/MoreL'

export const Wrapper = styled.div``
export const Header = styled.div<TActive>`
  ${css.flex('align-center')};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  margin-bottom: 8px;
  margin-left: -25px;
  &:hover {
    cursor: pointer;
  }
`
export const ArrowIcon = styled(ArrowSVG)<{ $isOpen: boolean }>`
  fill: ${theme('tags.text')};
  ${css.size(16)};
  opacity: 0;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'rotate(270deg)' : 'rotate(180deg)'};
  transition: transform 0.5s;

  ${Wrapper}:hover & {
    opacity: 0.6;
  }

  ${Header}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  margin-left: 7px;
`
export const FolderTitle = styled.div`
  color: ${theme('thread.extraInfo')};
  opacity: 0.65;
  margin-left: 4px;
  font-weight: 500;
  font-size: 13px;
  margin-right: 8px;
  ${css.cutRest('85px')};

  ${Header}:hover & {
    opacity: 1;
  }
`
export const Count = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;

  &:before {
    content: '(';
    margin-right: 2px;
    font-size: 12px;
  }
  &:after {
    content: ')';
    margin-left: 2px;
    font-size: 12px;
  }
`

export const Content = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  width: 100%;
  margin-bottom: 15px;
`
export const SubToggle = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-left: 3px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
export const SubToggleTitle = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-left: 10px;
  padding: 2px;
  border-radius: 5px;
`
export const SubTogglePrefixIcon = styled(MoreSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  margin-right: 2px;
`
