import { FC, memo } from 'react'

import Center from './Center'
import Bottom from './Bottom'

export type TProps = {
  type?: 'bottom' | 'center'
  pageNumber: number
  disabled?: boolean
  onChange?: (page: number) => void
}

const Perv: FC<TProps> = ({ type, ...restProps }) => {
  switch (type) {
    case 'center':
      return <Center {...restProps} />

    default: {
      return <Bottom {...restProps} />
    }
  }
}

export default memo(Perv)
