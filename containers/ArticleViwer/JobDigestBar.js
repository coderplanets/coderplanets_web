import React from 'react'

import { ICON_CMD } from '../../config'

import Labeler from '../Labeler'

import { Wrapper, Divider } from './styles/job_digest_bar'

const JobDigestBar = () => (
  <Wrapper>
    <Labeler label="city" selected={['成都']} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="salary" selected={['2k-5k']} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="education" selected={['本科']} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="finance" selected={['C轮']} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="scale" selected={['50-100人']} readonly />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="field" selected={['互联网']} readonly multi />
    <Divider src={`${ICON_CMD}/more.svg`} />
    <Labeler label="exp" selected={['1-3年']} readonly />
  </Wrapper>
)

export default JobDigestBar
