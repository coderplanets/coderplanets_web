import styled from 'styled-components'

import { values, includes } from 'ramda'
import type { TThread } from '@/spec'
import { CARD_THREAD } from '@/constant'
import css, { theme } from '@/utils/css'

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

  margin-top: 12px;
  /* padding-top: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '13px' : '16px'}; */
  padding-left: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '15px' : '25px'};
  padding-right: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? 0 : '80px'};
  margin-right: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '35px' : '65px'};

  border-right: 1px solid;
  border-right-color: ${theme('border')};

  ${css.media.mobile`
     padding: 10px 15px;
     margin-right: 0;
  `};
`
export const MobileCardsMainWrapper = styled(MainWrapper)`
  padding: 0;
  padding-right: 10px;
`
export const FilterWrapper = styled.div<{ thread: TThread }>`
  ${css.flex('align-center')};
  margin-bottom: 5px;
  margin-left: ${({ thread }) =>
    includes(thread, values(CARD_THREAD)) ? '5px' : 0};

  ${css.media.mobile`margin-bottom: 4px;`};
`
