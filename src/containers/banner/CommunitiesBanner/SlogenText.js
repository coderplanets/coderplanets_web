import React, { useEffect, useState } from 'react'
import { AnimateOnChange } from 'react-animation'

import { SlogenTextWrapper } from './styles'

const coolThings = ['心爱的作品', '骄傲的团队', '沉淀的知识']

const SlogenText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (index >= coolThings.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 3000)
    return () => clearInterval(id)
  })

  return (
    <AnimateOnChange durationOut={400}>
      <SlogenTextWrapper highlight>{coolThings[index]}</SlogenTextWrapper>
    </AnimateOnChange>
  )
}

export default SlogenText
