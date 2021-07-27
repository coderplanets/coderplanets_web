import { FC } from 'react'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'

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
      <FooterPanel>感谢你用实际行动为社区净化作出贡献。</FooterPanel>
    </Wrapper>
  )
}

export default Main
