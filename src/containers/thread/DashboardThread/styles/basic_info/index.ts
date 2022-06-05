import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding: 0 150px;
`
export const Section = styled.div`
  padding-bottom: 30px;
  margin-bottom: 20px;
`

export const LogoWrapper = styled.div`
  ${css.size(70)};
`
export const Logo = styled.div`
  ${css.size(70)};
  background: ${theme('hoverBg')};
  border-radius: 4px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-bottom: 12px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const Inputer = styled(Input)`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 300px;
`
