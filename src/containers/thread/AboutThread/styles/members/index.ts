import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import { Avatar as AdminAvatar } from './admin_member'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  min-height: 500px;

  background: transparent;
  border-radius: 6px;
  margin-top: 12px;
  padding-left: 25px;
  padding-right: 80px;
  margin-right: 65px;
`
export const Block = styled.div`
  margin-bottom: 30px;
  width: 600px;
`
export const BottomBlock = styled(Block)`
  border-top: 1px solid;
  border-top-color: ${theme('border')};
  padding-top: 30px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 30px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  font-weight: 600;
`
export const Count = styled.div`
  font-size: 11px;
  color: ${theme('thread.extraInfo')};
  background-color: ${theme('textBadge')};
  padding: 1px 5px;
  margin-left: 10px;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 1px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
export const Admin = styled.div`
  ${css.flex('align-start')};
  width: 33%;
`
export const NormalAvatar = styled(AdminAvatar)`
  ${css.circle(30)};
  margin-bottom: 10px;
  border: none;
`
