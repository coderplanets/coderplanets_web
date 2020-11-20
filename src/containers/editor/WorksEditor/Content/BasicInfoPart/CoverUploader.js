import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  IntroImgHolder,
  HolderIcon,
  Section,
  Title,
  Desc,
} from '../../styles/content/basic_info_part/cover_uploader'

const CoverUploader = () => {
  return (
    <Wrapper>
      <IntroImgHolder>
        <HolderIcon src={`${ICON}/shape/add-square.svg`} />
      </IntroImgHolder>
      <Section>
        <Title>封面图片</Title>
        <Desc>上传图片或输入图片URL，推荐尺寸 300 x 300</Desc>
      </Section>
    </Wrapper>
  )
}

export default React.memo(CoverUploader)
