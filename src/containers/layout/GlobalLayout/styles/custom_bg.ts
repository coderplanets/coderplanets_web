import styled from 'styled-components'
import { ASSETS_ENDPOINT } from '@/config'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /* background-image: url(${ASSETS_ENDPOINT}/space-background.svg); */
  /* background-attachment: fixed; */
  /* see https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/ */
  will-change: transform;
  opacity: 0.8;
  // 1
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 33%,
    hsl(337deg 100% 43%) 44%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%
  );

  // 2
  background: #4568dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #b06ab3, #4568dc);
  // 3: https://codepen.io/tennowman/pen/AYRqzO
  background-color: #269;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.28) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  // 4: https://codepen.io/thebabydino/pen/dMaRYx
  background: linear-gradient(90deg, #fff 0.25em, transparent 0),
    linear-gradient(90deg, #36599d 50%, transparent 0),
    linear-gradient(90deg, #643140 50%, #0a226a 0);
  background-size: 2.25em, 4.5em, 9em;
  // 5:
  /* background-image: url(/bg/Hinterrhein.png); */
  /* background-image: url(/bg/Waihou.png); // contain */
  /* background-image: url(/bg/Linth.png); */
  /* background-image: url(/bg/Mataura.png); // cover */

  /* background-image: url(/bg/Waimakariri.png); */
  /* background-image: url(/bg/Doubs.png); */

  background-size: contain;
`

export const holder = 1
