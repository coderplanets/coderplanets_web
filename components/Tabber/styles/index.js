import styled from 'styled-components'

// import Img from '../../Img'
import { theme, cs } from 'utils'
import TabPostSVG from '../../SvgIcons/TabPostSVG'
import TabTechSVG from '../../SvgIcons/TabTechSVG'
import TabRadarSVG from '../../SvgIcons/TabRadarSVG'
import TabShareSVG from '../../SvgIcons/TabShareSVG'
import TabUserSVG from '../../SvgIcons/TabUserSVG'
import TabCitySVG from '../../SvgIcons/TabCitySVG'
import TabJobSVG from '../../SvgIcons/TabJobSVG'
//
import TabWikiSVG from '../../SvgIcons/TabWikiSVG'
import TabVideoSVG from '../../SvgIcons/TabVideoSVG'
import TabRepoSVG from '../../SvgIcons/TabRepoSVG'
import TabCheatsheetSVG from '../../SvgIcons/TabCheatsheetSVG'
//
import TabPlSVG from '../../SvgIcons/TabPlSVG'
import TabFrontendSVG from '../../SvgIcons/TabFrontendSVG'
import TabBackendSVG from '../../SvgIcons/TabBackendSVG'
import TabMobileSVG from '../../SvgIcons/TabMobileSVG'
import TabAISVG from '../../SvgIcons/TabAISVG'
import TabDesignSVG from '../../SvgIcons/TabDesignSVG'
import TabBlockChainSVG from '../../SvgIcons/TabBlockChainSVG'
// user page
import TabLikesSVG from '../../SvgIcons/TabLikesSVG'
import TabPublishSVG from '../../SvgIcons/TabPublishSVG'
import TabBillingSVG from '../../SvgIcons/TabBillingSVG'
import TabCommentsSVG from '../../SvgIcons/TabCommentsSVG'
import TabSettingsSVG from '../../SvgIcons/TabSettingsSVG'
import TabFavoritesSVG from '../../SvgIcons/TabFavoritesSVG'

export const LableWrapper = styled.div`
  ${cs.flex('align-center')};
`

const commonIcon = comp =>
  styled(comp)`
    fill: ${({ active }) =>
      active ? theme('tabs.headerActive') : theme('tabs.header')};
    width: ${({ small }) => (small ? '13px' : '15px')};
    height: ${({ small }) => (small ? '13px' : '15px')};
    margin-right: 5px;
    margin-top: 1px;
  `

export const TabPostIcon = commonIcon(TabPostSVG)
export const TabTechIcon = commonIcon(TabTechSVG)
export const TabRadarIcon = commonIcon(TabRadarSVG)
export const TabShareIcon = commonIcon(TabShareSVG)
export const TabUserIcon = commonIcon(TabUserSVG)
export const TabCityIcon = commonIcon(TabCitySVG)
export const TabJobIcon = commonIcon(TabJobSVG)
export const TabWikiIcon = commonIcon(TabWikiSVG)
export const TabVideoIcon = commonIcon(TabVideoSVG)
export const TabRepoIcon = commonIcon(TabRepoSVG)
export const TabCheatsheetIcon = commonIcon(TabCheatsheetSVG)
// communities
export const TabPlIcon = commonIcon(TabPlSVG)
export const TabFrontendIcon = commonIcon(TabFrontendSVG)
export const TabBackendIcon = commonIcon(TabBackendSVG)
export const TabMobileIcon = commonIcon(TabMobileSVG)
export const TabAIIcon = commonIcon(TabAISVG)
export const TabDesignIcon = commonIcon(TabDesignSVG)
export const TabBlockChainIcon = commonIcon(TabBlockChainSVG)

// user page
export const TabLikesIcon = commonIcon(TabLikesSVG)
export const TabPublishIcon = commonIcon(TabPublishSVG)
export const TabBillingIcon = commonIcon(TabBillingSVG)
export const TabCommentsIcon = commonIcon(TabCommentsSVG)
export const TabSettingsIcon = commonIcon(TabSettingsSVG)
export const TabFavoritesIcon = commonIcon(TabFavoritesSVG)
