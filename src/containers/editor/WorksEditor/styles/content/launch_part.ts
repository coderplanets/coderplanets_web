import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 100%;
  min-height: 500px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 30px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  width: 100%;
  min-height: 300px;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const PublishIcon = styled(Img)`
  ${css.size(50)};
  fill: #48a49f;
  margin-left: -15px;
  /* margin-left: 3px; */
`
export const ThxTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-top: 40px;
`
export const ThxDesc = styled.div`
  width: 90%;
  text-align: center;
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-top: 10px;
`
export const UL = styled.ul`
  margin-top: 40px;
  margin-left: 55px;
  list-style: unset;
`
export const Li = styled.li`
  margin-bottom: 5px;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  padding-top: 20px;
  padding-right: 20px;
`
