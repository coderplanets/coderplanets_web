import styled from 'styled-components'

// import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`
export const NewsWrapper = styled.div`
  width: 100%;
  height: 90vh;
`
export const NewsInnerWrapper = styled.div`
  ${cs.flex()};
  height: 100%;
`
const ShadowBar = styled.div`
  position: absolute;
  top: 5px;
  height: 88vh;
  width: 50px;
  background: -webkit-radial-gradient(
    0% 50%,
    100% 60%,
    #022029 0%,
    transparent 100%
  );
  border-left: 1px solid;
  border-color: #084255;
  z-index: 1;
`
export const LeftShadowBar = styled(ShadowBar)`
  left: 0px;
  z-index: 2;
`
export const RightShadowBar = styled(ShadowBar)`
  right: 0;
  transform: rotate(180deg);
`
// Waypoint hack
export const ShadowBarHolder = styled.div`
  width: 1px;
  height: 100%;
  border: 1px solid transparent;
`
export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;
`
