import { FC, memo } from 'react'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import { Wrapper, LoadingIcon, Desc } from './styles/map_loading'

const MapLoading: FC = () => (
  <Wrapper>
    <LoadingIcon />
    <LavaLampLoading />
    <Desc>如果长时间未加载，请尝试刷新页面</Desc>
  </Wrapper>
)

export default memo(MapLoading)
