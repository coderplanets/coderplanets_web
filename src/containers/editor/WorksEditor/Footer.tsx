import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Button from '@/widgets/Buttons/Button'
import SubmitButton from '@/widgets/Buttons/SubmitButton'
import WordsCounter from '@/widgets/WordsCounter'
import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  FirstStepWrapper,
  ArticleWrapper,
  ArticleButtons,
  FooterExtra,
} from './styles/footer'

import type { TStep, TInputData } from './spec'
import { STEP } from './constant'
import { previousStep, nextStep, setWordsCountState, onPublish } from './logic'

type TProps = {
  step: TStep
  inputData: TInputData
  submitState: TSubmitState
}

const Footer: FC<TProps> = ({ step, inputData, submitState }) => {
  const { stepReady } = submitState

  switch (step) {
    case STEP.ZERO: {
      return !stepReady[0] ? null : (
        <FirstStepWrapper>
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </FirstStepWrapper>
      )
    }

    case STEP.THREE: {
      return (
        <ArticleWrapper>
          <FooterExtra>
            <TagsList
              items={[]}
              mLeft={0}
              size="medium"
              // community={community}
              // thread={THREAD.WORKS}
              withSetter
            />
            <WordsCounter
              body={inputData.body}
              bottom={3}
              onChange={setWordsCountState}
              min={100}
              max={5000}
            />
          </FooterExtra>

          <ArticleButtons>
            <ArrowButton
              size="medium"
              onClick={() => previousStep()}
              direction="left"
              dimWhenIdle
            >
              上一步
            </ArrowButton>

            <SubmitButton
              withCancel={false}
              submitState={submitState}
              okText="发 布"
              onPublish={onPublish}
              onCancel={console.log}
            />
          </ArticleButtons>
        </ArticleWrapper>
      )
    }

    case STEP.FOUR: {
      return (
        <Wrapper>
          <ArrowButton size="medium" direction="left" dimWhenIdle>
            作品集市
          </ArrowButton>
          <Button size="small" ghost noBorder>
            作品主页
          </Button>
        </Wrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <ArrowButton
            size="medium"
            onClick={() => previousStep()}
            direction="left"
            dimWhenIdle
          >
            上一步
          </ArrowButton>
          <ArrowButton size="large" onClick={() => nextStep()}>
            下一步
          </ArrowButton>
        </Wrapper>
      )
    }
  }

  // <Button size="medium" disabled={!valid} onClick={nextStep}>
  //   起飞
  // </Button>
}

export default memo(Footer)
