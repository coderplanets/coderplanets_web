import React from 'react'
import R from 'ramda'

import { ICON_CMD } from 'config'

import Labeler from '../Labeler'

import { Wrapper, Divider } from './styles/digest_bar'

const JobDigestBar = ({ data }) => (
  <Wrapper>
    <Labeler label="city" selected={R.pluck('title', data.tags)} readOnly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="education" selected={[data.education]} readOnly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="exp" selected={[data.exp]} readOnly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="salary" selected={[data.salary]} readOnly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="field" selected={[data.field]} readOnly multi />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="finance" selected={[data.finance]} readOnly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="scale" selected={[data.scale]} readOnly />
  </Wrapper>
)

export default JobDigestBar
