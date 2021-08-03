import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import TabPostSVG from '@/SvgIcons/TabPostSVG'
import TabRadarSVG from '@/SvgIcons/TabRadarSVG'
import TabUserSVG from '@/SvgIcons/TabUserSVG'
import TabJobSVG from '@/SvgIcons/TabJobSVG'
//
import TabRepoSVG from '@/SvgIcons/TabRepoSVG'
import TabCheatsheetSVG from '@/SvgIcons/TabCheatsheetSVG'

// user page
import TabLikesSVG from '@/SvgIcons/TabLikesSVG'
import TabPublishSVG from '@/SvgIcons/TabPublishSVG'
import TabBillingSVG from '@/SvgIcons/TabBillingSVG'
import TabCommentsSVG from '@/SvgIcons/TabCommentsSVG'
import TabSettingsSVG from '@/SvgIcons/TabSettingsSVG'
import TabFavoritesSVG from '@/components/SvgIcons/TabFavoritesSVG'

export const LableWrapper = styled.div`
  ${css.flex('align-center')};
`

type TCommonIcon = { $active: boolean; $small: boolean }

const commonIcon = (comp) => {
  return styled(comp)<TCommonIcon>`
    fill: ${({ $active }: { $active: boolean }) =>
      $active ? theme('tabs.headerActive') : theme('tabs.header')};
    width: ${({ $small }: { $small: boolean }) => ($small ? '13px' : '15px')};
    height: ${({ $small }) => ($small ? '13px' : '15px')};
    margin-right: 5px;
    display: block;
  `
}

export const TabPostIcon = commonIcon(TabPostSVG)
export const TabRadarIcon = commonIcon(TabRadarSVG)
export const TabUserIcon = commonIcon(TabUserSVG)
export const TabJobIcon = commonIcon(TabJobSVG)
export const TabRepoIcon = commonIcon(TabRepoSVG)
export const TabCheatsheetIcon = commonIcon(TabCheatsheetSVG)

// user page
export const TabLikesIcon = commonIcon(TabLikesSVG)
export const TabPublishIcon = commonIcon(TabPublishSVG)
export const TabBillingIcon = commonIcon(TabBillingSVG)
export const TabCommentsIcon = commonIcon(TabCommentsSVG)
export const TabSettingsIcon = commonIcon(TabSettingsSVG)
export const TabFavoritesIcon = commonIcon(TabFavoritesSVG)
