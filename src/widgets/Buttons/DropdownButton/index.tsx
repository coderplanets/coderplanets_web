import { FC, ReactNode, memo } from 'react'

import type { TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  ButtonWrapper,
  InnerBtnWrapper,
  FilterIcon,
} from '../styles/dropdown_button'

const log = buildLog('C:DropdownButton')

type TProps = {
  children: ReactNode
  onClick?: () => void
} & TSpace

const DropdownButton: FC<TProps> = ({
  children,
  onClick = log,
  ...restProps
}) => {
  return (
    <Wrapper {...restProps}>
      <ButtonWrapper size="small" type="primary" ghost>
        <InnerBtnWrapper>
          {children}
          <FilterIcon />
        </InnerBtnWrapper>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default memo(DropdownButton)
