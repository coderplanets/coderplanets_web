import styled from 'styled-components'

export const Wrapper = styled.div<{ effect: string }>`
  ${({ effect }) => effect || ''};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;

  /* position: fixed; */
  /* see https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/ */
  will-change: transform;
  transition: all 0.3s;
`
export const InnerWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`
