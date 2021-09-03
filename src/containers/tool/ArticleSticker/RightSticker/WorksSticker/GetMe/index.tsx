import { FC, memo } from 'react'

import { ICON } from '@/config'

import DownLoadInfo from './DownloadInfo'
import {
  Wrapper,
  Row,
  LinkIcon,
  LinkAddr,
} from '../../../styles/right_sticker/works_sticker/get_me'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const GetMe: FC = () => {
  return (
    <Wrapper>
      <Row>
        <LinkIcon src={`${ICON}/social/global.svg`} />
        <LinkAddr href="coderplanets.com">coderplanets.com</LinkAddr>
      </Row>
      <DownLoadInfo />
    </Wrapper>
  )
}

export default memo(GetMe)
