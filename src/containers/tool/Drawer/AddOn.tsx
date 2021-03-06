import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import {
  Wrapper,
  CloseTab,
  CloserInner,
  UploadingTab,
  UploadImgIcon,
  UploadLoadingIcon,
} from './styles/add_on'

import { closeDrawer } from './logic'

type TProps = {
  type: string
  imageUploading?: boolean
}

const AddOn: FC<TProps> = ({ type, imageUploading = false }) => {
  return (
    <Wrapper>
      <CloseTab type={type} onClick={() => closeDrawer()}>
        <CloserInner />
      </CloseTab>
      <UploadingTab show={imageUploading}>
        <UploadImgIcon src={`${ICON_CMD}/preview-tab-image.svg`} />
        <UploadLoadingIcon src={`${ICON_CMD}/preview-tab-loading.svg`} />
      </UploadingTab>
    </Wrapper>
  )
}

export default memo(AddOn)
