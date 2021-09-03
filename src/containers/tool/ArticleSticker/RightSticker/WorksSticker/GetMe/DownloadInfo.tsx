import { FC, memo } from 'react'

import {
  Wrapper,
  PlatformWrapper,
  AppleLogo,
  AndroidLogo,
  PlatformIntro,
  PlatformDesc,
  PlatformTitle,
} from '../../../styles/right_sticker/works_sticker/get_me/download_info'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const DownLoader: FC = () => {
  return (
    <Wrapper>
      <PlatformWrapper>
        <AppleLogo />
        <PlatformIntro>
          <PlatformDesc>Download on the</PlatformDesc>
          <PlatformTitle>App Store</PlatformTitle>
        </PlatformIntro>
      </PlatformWrapper>
      <PlatformWrapper>
        <AndroidLogo />
        <PlatformIntro>
          <PlatformDesc>GET IT ON</PlatformDesc>
          <PlatformTitle>Android</PlatformTitle>
        </PlatformIntro>
      </PlatformWrapper>
    </Wrapper>
  )
}

export default memo(DownLoader)
