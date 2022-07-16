import { FC, ReactNode, memo } from 'react'

import type { TSizeTS, TSpace } from '@/spec'
import { SIZE } from '@/constant'

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
  size?: TSizeTS
  withBorder?: boolean
  onClick?: () => void
} & TSpace

const DropdownButton: FC<TProps> = ({
  children,
  size = SIZE.SMALL,
  withBorder = false,
  onClick = log,
  ...restProps
}) => {
  return (
    // @ts-ignore
    <Wrapper
      withBorder={withBorder}
      size={size}
      onClick={onClick}
      {...restProps}
    >
      <ButtonWrapper size="small" type="primary" ghost>
        <InnerBtnWrapper>
          <>{children}</>
          <FilterIcon />
        </InnerBtnWrapper>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default memo(DropdownButton)
