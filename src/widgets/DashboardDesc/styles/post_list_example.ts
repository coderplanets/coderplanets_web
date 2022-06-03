import styled from 'styled-components'

// import type { TTestable } from '@/spec'

// import Img from '@/Img'
import { theme } from '@/utils/css'

export const Wrapper = styled.div``
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-left: 3px;
  margin-top: 8px;
  margin-bottom: 18px;
`
export const DividerLine = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background: ${theme('border')};
`
