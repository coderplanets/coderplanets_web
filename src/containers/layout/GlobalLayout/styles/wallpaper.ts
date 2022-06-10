import styled from 'styled-components'

/**
 * see layout details:
 " @link https://css-tricks.com/the-fixed-background-attachment-hack/
 */

export const Wrapper = styled.div<{ effect: string }>`
  /* position: fixed; */
  /* see https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/ */
  will-change: transform;
  ${({ effect }) => effect || ''};

  height: 100vh;
  width: 100vw;

  transition: all 0.25s;
`

export const InnerWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`
