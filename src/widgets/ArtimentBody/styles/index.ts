import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
// import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  .article-viewer-wrapper {
    a {
      color: #139c9e;
      text-decoration: none;
      filter: saturate(0.6);
      &:hover {
        color: #139c9e;
        text-decoration: underline;
        filter: saturate(1);
        cursor: pointer;
      }
    }

    p {
      margin-bottom: 18px;
    }

    h2 {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    h3 {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .image-wrapper {
      margin-bottom: 20px;
      .single-image img {
        width: 100%;
      }
    }
  }
`

type TBody = { lineClampNum: number; mode: 'article' | 'comment' }
export const Body = styled.div<TBody>`
  font-size: ${({ mode }) => (mode === 'article' ? '16px' : '15px')};
  line-height: 1.85;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClampNum }) => lineClampNum};

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
export const HTML = styled.div`
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
`
