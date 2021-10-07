import { FC, memo } from 'react'
import { ICON } from '@/config'

import type { TEmotionType } from '@/spec'
import { EIcon } from '../styles/selected_emotions/emotion_icon'

type TProps = {
  name: TEmotionType
}

const EmotionIcon: FC<TProps> = ({ name }) => {
  return <EIcon src={`${ICON}/emotion/${name}.png`} name={name} noLazy />
}

export default memo(EmotionIcon)
