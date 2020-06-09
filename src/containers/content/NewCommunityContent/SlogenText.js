import React, { useEffect, useState } from 'react'
import { AnimateOnChange } from 'react-animation'

import { SloganTextWrapper } from './styles/banner'

const coolThings = ['心爱的作品', '骄傲的团队', '沉淀的知识']
const SWITCH_INTERVAL = 3000

/*
  this line is a hack for AnimateOnChange bug
  this bug happens when switch between browser tabs or things cause
  the CPU hign-usage job, then the animation will stop

  当做一些升高 CPU 操作时，AnimateOnChange 的动画会卡主，这是一个 hack
 */
const fixAnimationStockIfNeed = () => {
  const el = document.querySelector('.animate-on-change')

  if (el.style.opacity === '0') {
    el.style.opacity = '1'
  } else {
    el.style.opacity = '0'
  }
}

const SlogenText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      fixAnimationStockIfNeed()
      if (index >= coolThings.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, SWITCH_INTERVAL)

    return () => clearInterval(timer)
  })

  return (
    <React.Fragment>
      <AnimateOnChange durationOut={500}>
        <SloganTextWrapper highlight onClick={fixAnimationStockIfNeed}>
          {coolThings[index]}
        </SloganTextWrapper>
      </AnimateOnChange>
    </React.Fragment>
  )
}

export default React.memo(SlogenText)
