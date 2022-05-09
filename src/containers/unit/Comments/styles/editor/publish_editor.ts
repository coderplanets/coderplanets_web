import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  height: auto;
  border-radius: 10px;
  /* border: 1px solid; */
  border-color: transparent;
  padding-left: 15px;
  background: #f7f7f7;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    border-color: ${theme('thread.articleDigest')};
  }

  transition: all 0.2s;
`

export const ExpandWrapper = styled.div`
  ${css.flexColumn()};
  padding: 10px 0;
  background: transparent;
  min-height: 300px;
  height: auto;
  border-bottom: 3px solid;
  border-color: ${theme('border')};
  transition: all 0.2s;
`
