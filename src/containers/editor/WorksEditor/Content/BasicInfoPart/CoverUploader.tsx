import { FC, memo } from 'react'

import OSSUploader from '@/widgets/OSSUploader'
import { nilOrEmpty } from '@/utils/validator'

import {
  Wrapper,
  HolderWrapper,
  HolderIcon,
  RealCover,
  Section,
  Title,
  Desc,
} from '../../styles/content/basic_info_part/cover_uploader'
import { inputOnChange } from '../../logic'

type TProps = {
  cover?: string | null
}

const CoverUploader: FC<TProps> = ({ cover }) => {
  return (
    <Wrapper>
      <OSSUploader onUploadDone={(url) => inputOnChange(url, 'cover')}>
        {nilOrEmpty(cover) ? (
          <HolderWrapper>
            <HolderIcon />
          </HolderWrapper>
        ) : (
          <RealCover src={cover} />
        )}
      </OSSUploader>
      <Section>
        <Title>封面图片</Title>
        <Desc>展示图片的比例为 1:1, 最大不超过 300 KB, 支持常见图片格式。</Desc>
      </Section>
    </Wrapper>
  )
}

export default memo(CoverUploader)
