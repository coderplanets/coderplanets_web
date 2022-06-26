import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
`
export const Block = styled.div`
  margin-bottom: 30px;
  width: 665px;
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
  font-size: 16px;
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
  width: 33.3%;
`
export const NormalAvatar = styled(Img)`
  ${css.circle(26)};
  margin-right: 10px;
  margin-bottom: 16px;
`
