import styled from 'styled-components'
import { animate } from '@/utils/css'

export const Wrapper = styled.div<{ effect: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  ${({ effect }) => effect || ''};

  /* adjust s value for speed */
  /* position: fixed; */
  /* see https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/ */
  will-change: transform;
  /**
   * 可以横向滚动，有点意思。。
   * @link https://stackoverflow.com/questions/37903824/how-can-i-make-infinite-flowing-background-with-only-css
  */

  /* animation: ${animate.animatedBg} 3000s linear; */
  transition: all 0.3s;
`
export const InnerWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`
