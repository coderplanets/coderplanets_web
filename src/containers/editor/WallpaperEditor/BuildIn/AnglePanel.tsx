import { FC, memo } from 'react'

import {
  Wrapper,
  Top,
  Bottom,
  Left,
  Right,
  NeedleDot,
  Needle,
} from '../styles/build_in/angle_panel'
import { changeDirection } from '../logic'

type TProps = {
  direction: string
}

const AnglePanel: FC<TProps> = ({ direction }) => {
  return (
    <Wrapper>
      <Top $active={direction === 'top'} onClick={() => changeDirection('top')}>
        上
      </Top>
      <Bottom
        $active={direction === 'bottom'}
        onClick={() => changeDirection('bottom')}
      >
        下
      </Bottom>
      <Left
        $active={direction === 'left'}
        onClick={() => changeDirection('left')}
      >
        左
      </Left>
      <Right
        $active={direction === 'right'}
        onClick={() => changeDirection('right')}
      >
        右
      </Right>
      <NeedleDot />
      <Needle direction={direction} />
    </Wrapper>
  )
}

export default memo(AnglePanel)
