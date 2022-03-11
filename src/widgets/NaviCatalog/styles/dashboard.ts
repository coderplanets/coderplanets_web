import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 100%;
`
const CatalogCard = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 36px;
  color: #7c8f90;
  background: #003948;
  padding: 6px 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 2%);
`
type TParentCatalogCard = { index: number; isFirst: boolean; isLast: boolean }

export const ParentCatalogCard = styled(CatalogCard)<TParentCatalogCard>`
  z-index: ${({ index }) => 100 - index};
  height: ${({ isFirst }) => (isFirst ? '36px' : '46px')};
  margin-top: ${({ isFirst }) => (isFirst ? '0' : '-10px')};
  padding-top: ${({ isFirst }) => (isFirst ? '6px' : '16px')};
  box-shadow: ${({ isLast }) =>
    isLast
      ? '0px 5px 10px 0px rgb(0 0 0 / 2%)'
      : '0px 5px 10px 0px rgb(0 0 0 / 15%)'};
  border-bottom: 1px solid;
  border-bottom-color: ${({ isFirst }) =>
    isFirst ? 'transparent' : '#042f3c'};
`
export const ReadOnlyCatalogCard = styled(CatalogCard)`
  background: #05303e;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  margin-top: -5px;
  padding-top: 11px;
  height: 40px;
`
export const Title = styled.div`
  margin-left: 10px;
  font-size: 13px;
  font-weight: bold;
`
export const ReadOnlyTitle = styled.div`
  margin-left: 10px;
  font-size: 13px;
`
export const ReadOnlyIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 6px;
  opacity: 0.8;
`
export const Operator = styled.div`
  display: none;

  ${ParentCatalogCard}:hover & {
    display: block;
  }
`
export const BackIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 6px;
  margin-top: -2px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
