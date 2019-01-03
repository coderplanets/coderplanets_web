import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import Labeler from '../Labeler'

import { Wrapper, Divider } from './styles/job_digest_bar'

const JobDigestBar = ({ data }) => (
  <Wrapper>
    <Labeler label="city" selected={R.pluck('title', data.tags)} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="education" selected={[data.education]} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="exp" selected={[data.exp]} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="salary" selected={[data.salary]} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="field" selected={[data.field]} readonly multi />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="finance" selected={[data.finance]} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="scale" selected={[data.scale]} readonly />
  </Wrapper>
)

export default JobDigestBar
