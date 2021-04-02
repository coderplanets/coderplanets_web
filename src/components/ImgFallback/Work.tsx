import React from 'react'

import { getRandomInt } from '@/utils'
import { Wrapper, Row, Dice } from './styles/work'

const rollTheDice = () => {
  const num = getRandomInt(1, 6)

  switch (num) {
    case 1: {
      return (
        <React.Fragment>
          <div />
          <Dice />
          <div />
        </React.Fragment>
      )
    }
    case 2: {
      return (
        <React.Fragment>
          <Row>
            <Dice />
            <div />
          </Row>
          <Row>
            <div />
            <Dice />
          </Row>
        </React.Fragment>
      )
    }

    case 3: {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }

    case 4: {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }

    case 5: {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }

    case 6: {
      return (
        <React.Fragment>
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
        </React.Fragment>
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

const Work: React.FC<TProps> = ({ testid = 'image-fallbak-work' }) => {
  return <Wrapper testid={testid}>{rollTheDice()}</Wrapper>
}

export default React.memo(Work)
