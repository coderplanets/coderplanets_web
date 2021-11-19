import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: -5px;

  ${css.media.mobile`
    margin-top: 2px;
  `}
`
export const Title = styled.div`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;

  &:before {
    content: '- ';
  }
  &:after {
    content: ' -';
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transform: opacity 0.25s;

  ${css.media.mobile`
    font-size: 11px;
    opacity: 1;
    margin-bottom: 7px;
  `}
`
export const ListWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Community = styled.div`
  margin-right: 10px;
  opacity: 0.9;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  :last-child {
    margin-right: 0;
  }
  transition: all 0.2s;

  ${css.media.mobile`
    margin-right: 12px;
  `}
`
export const CommunityTitle = styled.span`
  font-size: 14px;
`
