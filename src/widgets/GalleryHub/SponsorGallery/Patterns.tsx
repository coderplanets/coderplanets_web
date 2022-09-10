import { FC, memo, useCallback, useRef } from 'react'

import { getRandomInt } from '@/utils/helper'
import useInterval from '@/hooks/useInterval'
import 'css-doodle'

import { Wrapper, Block } from '../styles/sponsor_gallery/patterns'

const Rules = {
  0: `
  :doodle {
    @grid: 24 / 35vw 250px; 
    overflow: hidden;
  }
  :after {
    content: '\\@hex(@rand(9632, 9687))';
    color: @pick(#395e75, #358478, #18657E, #2C77A3);
    font-size: 24px;
  }
  `,
  1: `
  :doodle {
    @grid: 24 / 35vw 250px; 
    grid-gap: 6px;
    overflow: hidden;
  }
  :after {
    content: '\\@pick(0043, 0050, 706b, 006e, 5fc3, 4e2d, 0416, 0A09)';
    color: @pick(#395e75, #358478, #18657E, #2C77A3);
    font-size: 24px;
    transform: scale(@rand(.2,1.8));
  }
  `,
  2: `
  :doodle {
    @grid: 24 / 35vw 250px; 
    overflow: hidden;
  }
  :after {
    content: '\\@hex(@rand(0x2500, 0x257f))';
    color: @pick(#395e75, #358478, #18657E, #2C77A3);
    font-size: 24px;
  }
  `,
  3: `
  :doodle {
    @grid: 24 / 35vw 250px; 
    grid-gap: 3px;
    overflow: hidden;
  }
  :after {
    content: '\\@pick(2686, 2687, 2688, 2689)';
    color: @pick(#395e75, #358478, #18657E, #2C77A3);
    font-size: 24px;
    transform: scale(@rand(.2,2));
  }
  `,
}

type TProps = {
  index: number
}

const Patterns: FC<TProps> = ({ index }) => {
  const ref = useRef(null)

  const changePattern = useCallback(() => {
    if (ref?.current) {
      const doodle = ref?.current.querySelector('css-doodle')
      doodle.update()
    }
  }, [ref])

  useInterval(() => {
    changePattern()
  }, getRandomInt(4, 12) * 1000)

  return (
    <Wrapper>
      <Block ref={ref}>
        {/* @ts-ignore */}
        <css-doodle>{Rules[index]}</css-doodle>
      </Block>
    </Wrapper>
  )
}

export default memo(Patterns)
