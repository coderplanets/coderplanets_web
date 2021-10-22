import styled from 'styled-components'

import { HCN } from '@/constant'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div<{ descExpand: boolean }>`
  ${css.flexGrow('align-center')};
  align-items: ${({ descExpand }) => (descExpand ? 'flex-start' : 'center')};
  transition: all 0.5s;
`
export const LogoWrapper = styled.div<{ raw: string }>`
  position: relative;
  width: 55px;
  /*  TODO:  use new logo */
  margin-top: ${({ raw }) => (raw === HCN ? '-10px' : 0)};

  @media (max-height: 800px) {
    margin-top: ${({ raw }) => (raw === HCN ? '-8px' : 0)};
  }

  ${css.media.mobile`
    width: 45px;
    margin-top: -2px;
  `};
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(45)};
  border-radius: 5px;

  ${css.media.mobile`
    width: 36px;
    height: 36px;
  `};
`
export const CommunityInfo = styled.div`
  ${css.flexColumn('justify-center')};

  margin-top: -6px;
  margin-left: 12px;

  ${css.media.mobile`
    margin-left: ${({ descExpand }) => (descExpand ? '12px' : '3px')};
  `};
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div<{ descExpand: boolean }>`
  ${css.flex('align-center')};
  font-size: ${({ descExpand }) => (descExpand ? '21px' : '18px')};
  color: ${theme('banner.title')};
`
export const TitleText = styled.span`
  margin-right: 10px;
`
export const LogoHolder = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 50px;
  height: 50px;
  @media (max-height: 800px) {
    width: 40px;
    height: 40px;
  }
  opacity: 0.6;
  margin-top: 3px;
`
