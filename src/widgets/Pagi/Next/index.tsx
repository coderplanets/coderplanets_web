import { FC, memo } from 'react'

import { TProps } from '../Perv'
import Center from './Center'
import Bottom from './Bottom'

const Next: FC<TProps> = ({ type, ...restProps }) => {
  switch (type) {
    case 'center':
      return <Center {...restProps} />

    default: {
      return <Bottom {...restProps} />
    }
  }
}

export default memo(Next)
