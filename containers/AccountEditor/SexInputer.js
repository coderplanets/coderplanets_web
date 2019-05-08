import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import {
  Wrapper,
  SexLable,
  SexInput,
  Dude,
  Girl,
  DudeIcon,
  GirlIcon,
} from './styles/sex_inputer'

import { sexChange } from './logic'

const SexInputer = ({ label, value }) => (
  <Wrapper>
    <SexLable>{label}</SexLable>
    <SexInput>
      <Dude onClick={sexChange('dude')}>
        <DudeIcon src={`${ICON_CMD}/dude.svg`} value={value} />
      </Dude>
      <Girl onClick={sexChange('girl')}>
        <GirlIcon src={`${ICON_CMD}/girl.svg`} value={value} />
      </Girl>
    </SexInput>
  </Wrapper>
)

SexInputer.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
}

SexInputer.defaultProps = {
  label: '性别:',
}

export default SexInputer
