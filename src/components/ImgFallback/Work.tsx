import { FC, Fragment, memo } from 'react'

import { getRandomInt } from '@/utils'
import { Wrapper, Row, Dice } from './styles/work'

const rollTheDice = () => {
  const num = getRandomInt(1, 6)

  switch (num) {
    case 1: {
      return (
        <Fragment>
          <div />
          <Dice />
          <div />
        </Fragment>
      )
    }
    case 2: {
      return (
        <Fragment>
          <Row>
            <Dice />
            <div />
          </Row>
          <Row>
            <div />
            <Dice />
          </Row>
        </Fragment>
      )
    }

    case 3: {
      return (
        <Fragment>
          <Row>
            <Dice />
            <div />
            <div />
          </Row>
          <Row>
            <div />
            <Dice />
            <div />
          </Row>
          <Row>
            <div />
            <div />
            <Dice />
          </Row>
        </Fragment>
      )
    }

    case 4: {
      return (
        <Fragment>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
          <Row />
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
        </Fragment>
      )
    }

    case 5: {
      return (
        <Fragment>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
          <Row>
            <div />
            <Dice />
            <div />
          </Row>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
        </Fragment>
      )
    }

    case 6: {
      return (
        <Fragment>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
          <Row>
            <Dice />
            <div />
            <Dice />
          </Row>
        </Fragment>
      )
    }

    default: {
      return (
        <Row>
          <Dice />
          <Dice />
          <Dice />
        </Row>
      )
    }
  }
}

type TProps = {
  testid?: string
}

const Work: FC<TProps> = ({ testid = 'image-fallbak-work' }) => {
  return <Wrapper testid={testid}>{rollTheDice()}</Wrapper>
}

export default memo(Work)
