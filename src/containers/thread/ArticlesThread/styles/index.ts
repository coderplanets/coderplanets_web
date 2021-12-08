import styled from 'styled-components'

import { values, includes } from 'ramda'
import type { TThread } from '@/spec'
import { CARD_THREAD } from '@/constant'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const MainWrapper = styled.div<{ thread: TThread }>`
  flex-grow: 1;
  width: 100%;

  background: ${({ thread }) =>
    includes(thread, values(CARD_THREAD))
      ? 'transparent'
      : theme('content.bg')};

  border-radius: 6px;

  padding-top: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '13px' : '16px'};
  padding-left: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '15px' : '25px'};
  padding-right: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? 0 : '24px'};
  margin-right: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '35px' : '42px'};

  ${css.media.mobile`
     padding: 10px 15px;
     margin-right: 0;
  `};
`
export const FilterWrapper = styled.div<{ thread: TThread }>`
  ${css.flex('align-center')};
  margin-bottom: 3px;
  margin-left: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '5px' : '-3px'};

  ${css.media.mobile`margin-bottom: 4px;`};
`
