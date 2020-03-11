import React from 'react'

import { useScript } from '@hooks'

import { Wrapper, Holder } from './styles/belt'

const Belt = () => {
  const [loaded] = useScript(
    'https://unpkg.com/css-doodle@0.7.7/css-doodle.min.js'
  )

  console.log('loaded', loaded)

  // 电路图效果
  // content: '\\@hex(@rand(0x2500, 0x257f))';
  // 圈圈圆圆三角效果
  // content: \\@hex(@rand(9632, 9687));
  // 杂乱效果
  // content: '\\@pick(27d4, 21b0, 141b, 141d, 2686, 1401, 2688, 2689)';
  const rule = `
  :doodle {
    @grid: 24 / 35vw 250px; 
    overflow: hidden;
  }
  :after {
    content: '\\@hex(@rand(0x2500, 0x257f))';
    color: @pick(#395e75, #358478, #18657E, #2C77A3);
    font-size: 24px;
  }
  `
  return (
    <React.Fragment>
      {loaded && (
        <Wrapper>
          <css-doodle>{rule}</css-doodle>
          <Holder />
          <css-doodle>{rule}</css-doodle>
        </Wrapper>
      )}
    </React.Fragment>
  )
}

export default React.memo(Belt)
