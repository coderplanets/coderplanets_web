import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Section = styled.section`
  margin: 0 70px;
  padding-bottom: 50px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('border')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const PreviewWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 20px;
`
export const PreviewImage = styled.div<{ effect: string }>`
  border: 1px solid;
  border-color: ${theme('border')};
  background-color: ${theme('hoverBg')};
  margin-right: 20px;

  width: 230px;
  height: 150px;
  border-radius: 5px;
  ${({ effect }) => effect || ''};

  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const RealPreview = styled.div`
  position: relative;
`
export const ContentBlock = styled.div`
  position: absolute;
  top: 1px;
  left: 25px;
  width: 180px;
  height: 148px;
  background: white;
  z-index: 2;
  padding: 15px;
  cursor: pointer;
`
export const ContentBar = styled.div<{ long: number }>`
  width: ${({ long }) => `${long}%`};
  height: 10px;
  background: ${theme('border')};
  margin-bottom: 10px;
  z-index: 3;
  border-radius: 5px;
`

export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-top: 20px;
`
