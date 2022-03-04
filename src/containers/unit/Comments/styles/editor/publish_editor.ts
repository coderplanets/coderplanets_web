import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  background: #f5f5f5; // to-theme
  min-height: 30px;
  height: auto;
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    border-color: ${theme('thread.articleDigest')};
  }

  ${css.media.mobile`
    background: #08303c;  /* TODO: same as comment background */
  `};

  transition: all 0.2s;
`

export const ExpandWrapper = styled.div`
  ${css.flexColumn()};
  padding: 10px 0;
  background: transparent;
  min-height: 300px;
  height: auto;
  border-bottom: 3px solid;
  border-color: #00424f;
  transition: all 0.2s;
`
