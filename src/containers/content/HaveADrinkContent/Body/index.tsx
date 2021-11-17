/*
 *
 * HaveADrink Body
 *
 */

import { FC, memo } from 'react'
import { AnimateOnChange } from 'react-animation'

import { buildLog } from '@/utils/logger'

import type { TView, TSettingOption } from '../spec'
import Catalog from './Catalog'
import Setting from './Setting'
import About from './About'
import Publish from './Publish'

import { Wrapper, SentenceWrapper, Sentence, Hint } from '../styles/body'
import { VIEW } from '../constant'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

type TViewProps = {
  view: TView
  sentence: string
  category: string
  settingOptions: TSettingOption
}

const View: FC<TViewProps> = ({ view, category, sentence, settingOptions }) => {
  const animate = {
    fade: {
      durationOut: 200,
    },
    bounce: {
      animationIn: 'bounceIn',
      animationOut: 'bounceOut',
      durationOut: 1000,
    },
  }

  switch (view) {
    case VIEW.CATALOG: {
      return <Catalog category={category} />
    }
    case VIEW.SETTING: {
      return <Setting settingOptions={settingOptions} />
    }
    case VIEW.ABOUT: {
      return <About />
    }
    case VIEW.EDIT: {
      return <Publish />
    }
    default: {
      return (
        <SentenceWrapper>
          <Sentence fontSize={settingOptions.fontSize}>
            <AnimateOnChange {...animate[settingOptions.animateType]}>
              {sentence}
            </AnimateOnChange>
          </Sentence>

          <Hint>按「空格」键或「点击」刷新</Hint>
        </SentenceWrapper>
      )
    }
  }
}

const Body = (props) => {
  return (
    <Wrapper>
      <View {...props} />
    </Wrapper>
  )
}

export default memo(Body)
