import { FC, memo, useState } from 'react'

import CustomScroller from '@/widgets/CustomScroller'
import { SpaceGrow } from '@/widgets/Common'

import ToggleIcon from './ToggleIcon'
import Options from './Options'

import {
  Wrapper,
  ItemBar,
  Title,
  Desc,
} from '../../styles/filter_menu/sort_column'

const SortColumn: FC = () => {
  const [activeBar, setActiveBar] = useState(null)

  return (
    <Wrapper>
      <CustomScroller
        direction="vertical"
        // height="35vh"
        height="calc(50vh - 100px)"
        autoHide
        showShadow={false}
      >
        <div>
          <ItemBar
            active={activeBar === 'time'}
            onClick={() => {
              activeBar !== 'time' ? setActiveBar('time') : setActiveBar(null)
            }}
          >
            <Title>
              时间
              <SpaceGrow />
              <ToggleIcon active={activeBar === 'time'} />
            </Title>
            {activeBar === 'time' ? <Options /> : <Desc>全部</Desc>}
          </ItemBar>
          <ItemBar
            active={activeBar === 'hot'}
            onClick={() => {
              activeBar !== 'hot' ? setActiveBar('hot') : setActiveBar(null)
            }}
          >
            <Title>
              热度
              <SpaceGrow />
              <ToggleIcon active={activeBar === 'hot'} />
            </Title>
            {activeBar === 'hot' ? <Options /> : <Desc>全部</Desc>}
          </ItemBar>
          <ItemBar
            active={activeBar === 'length'}
            onClick={() => {
              activeBar !== 'length'
                ? setActiveBar('length')
                : setActiveBar(null)
            }}
          >
            <Title>
              长度
              <SpaceGrow />
              <ToggleIcon active={activeBar === 'length'} />
            </Title>
            {activeBar === 'length' ? <Options /> : <Desc>全部</Desc>}
          </ItemBar>
        </div>
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(SortColumn)
