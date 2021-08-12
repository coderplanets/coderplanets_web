import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { Wrapper, LoadingIcon, Title, Desc } from './styles/map_loading'

const MapLoading: FC = () => (
  <Wrapper>
    <LoadingIcon src={`${ICON_CMD}/geo_map.svg`} />
    <Title>正在加载, 请稍等</Title>
    <Desc>如果长时间未加载，请尝试刷新页面</Desc>
  </Wrapper>
)

export default memo(MapLoading)
