import { FC } from 'react'

import { SpaceGrow } from '@/widgets/Common'
import Checker from '@/widgets/Checker'

import type { TREPORT_ITEM } from '../spec'

import {
  Wrapper,
  OptionsWrapper,
  Option,
  SelectWrapper,
  Title,
  FooterPanel,
} from '../styles/report_content/main'
import { selectItem } from '../logic'

type TProps = {
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const Main: FC<TProps> = ({ items, activeItem }) => {
  return (
    <Wrapper>
      <OptionsWrapper>
        {items &&
          items.map((item) => (
            <Option key={item.raw}>
              <SelectWrapper onClick={() => selectItem(item.raw)}>
                <Checker checked={item.raw === activeItem.raw} />
                <Title active={item.raw === activeItem.raw}>{item.title}</Title>
              </SelectWrapper>
              <SpaceGrow />
            </Option>
          ))}
      </OptionsWrapper>
      <FooterPanel>感谢你为社区净化作出贡献，我们将尽快处理。</FooterPanel>
    </Wrapper>
  )
}

export default Main
