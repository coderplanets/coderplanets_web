import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import Img from '@/Img'
import Input from '@/widgets/Input'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  background: #022a34;
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    display: block;
    background: #154e60;
  }
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  min-width: 260px;
  height: 35px;
  padding: 0 5px;
  padding-bottom: -3px;
  border: 1px solid;
  border-color: #154e60;
  border-bottom: none;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`
export const SubscribeInput = styled(Input)`
  background: #022a34; // footer bg
  border: none;
  width: 90%;
  height: 30px;
  border-radius: 0;
  padding-left: 8px;
  margin-top: -1px;

  &:hover {
    border: none;
    /* border: none;
    border-bottom: 1px solid; */
    border-color: #1d4761;
    background: #0b2f3a;
  }
  &:focus {
    border: none;
    /* border: none;
    border-bottom: 1px solid; */
    border-color: #1d4761;
    background: #0b2f3a;
  }
`
export const MailBoxIcon = styled(Img)`
  ${css.size(15)};
  fill: #176179;
  margin-right: 8px;
`
