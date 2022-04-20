import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

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

    b {
      color: ${theme('thread.articleTitle')};
      font-weight: bold;
    }

    h1,
    h2,
    h3 {
      color: ${theme('thread.articleTitle')};
    }

    h1 {
      margin-top: 20px;
      margin-bottom: 25px;
      font-size: 20px;
    }

    h2 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 18px;
    }

    h3 {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 16px;
    }

    .list-item {
      display: flex;
      align-items: baseline;
      box-sizing: content-box;
      position: relative;
      width: 100%;

      .list__item-unorder-prefix {
        position: relative;
        margin-right: 26px;
      }

      .list__item-unorder-prefix::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background: ${theme('thread.articleTitle')};
        border-radius: 50%;
        top: -8px;
        left: 0;
      }

      .list-item-text {
        font-size: 15px;
        outline: none;
        flex-grow: 1;
        padding: 5px 0;
        word-break: break-all;
      }
    }

    .image-wrapper {
      margin-bottom: 20px;
      .single-image img {
        width: 100%;
      }
    }
  }
`

type TBody = { lineClamp: number; mode: 'article' | 'comment' }
export const Body = styled.div<TBody>`
  font-size: ${({ mode }) => (mode === 'article' ? '16px' : '15px')};
  line-height: 1.85;
  ${({ lineClamp }) => `${css.lineClamp(lineClamp)}`};
`
export const HTML = styled.div`
  color: ${theme('thread.articleDigest')};
`
