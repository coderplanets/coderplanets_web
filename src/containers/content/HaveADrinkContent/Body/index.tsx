/*
 *
 * HaveADrink Body
 *
 */

import { FC, memo } from 'react'
import { AnimateOnChange } from '@groupher/react-animation'

import type { TView, TDrinkItem, TSettingOption } from '../spec'
import { VIEW } from '../constant'

import Catalog from './Catalog'
import Setting from './Setting'
import About from './About'
import Publish from './Publish'
import Content from './Content'

import { Wrapper, SentenceWrapper, Sentence, Hint } from '../styles/body'

type TViewProps = {
  view: TView
  drink: TDrinkItem
  category: string
  settingOptions: TSettingOption
}

const View: FC<TViewProps> = ({ view, category, drink, settingOptions }) => {
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
              <Content item={drink} />
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
