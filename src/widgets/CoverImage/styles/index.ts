import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Img from '@/Img'
import { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: 100%;
  height: 300px;
  border: 1px solid;
  border-color: ${theme('border')};
  margin-bottom: 20px;
`
export const ImageWrapper = styled.div`
  max-height: 300px;
  overflow: hidden;
`
export const Image = styled(Img)`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
`
