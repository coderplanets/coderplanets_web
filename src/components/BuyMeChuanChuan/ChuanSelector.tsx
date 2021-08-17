import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import {
  SelectBox,
  ChuanChuanIcon,
  Selectors,
  By,
  Circle,
} from './styles/chuan_selector'

type TProps = {
  active: number
  onSelect: (howMany: number) => void
}

const ChuanSelector: FC<TProps> = ({ active, onSelect }) => {
  const options = [1, 5, 10, 50, 100]

  return (
    <SelectBox>
      <ChuanChuanIcon src={`${ICON_CMD}/chuanchuan.svg`} />

      <Selectors>
        <By>x</By>
        {options.map((item) => (
          <Circle
            key={item}
            active={item === active}
            onClick={() => onSelect(item)}
          >
            {item}
          </Circle>
        ))}
      </Selectors>
    </SelectBox>
  )
}

export default memo(ChuanSelector)
