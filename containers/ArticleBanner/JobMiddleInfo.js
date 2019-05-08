import React from 'react'
import PropTypes from 'prop-types'

import DotDivider from '@components/DotDivider'
import CityList from './CityList'
import { Wrapper, Salary, Text, ExpLabel } from './styles/job_middle_info'

const JobMiddleInfo = ({ data }) => (
  <Wrapper>
    <Salary>{data.salary}</Salary>
    <DotDivider />
    <Text>{data.education}</Text>
    <DotDivider />
    <Text>
      <ExpLabel>经验 </ExpLabel>
      {data.exp}
    </Text>
    <DotDivider />
    <CityList data={data.tags} />
  </Wrapper>
)

JobMiddleInfo.propTypes = {
  data: PropTypes.shape({
    salary: PropTypes.string,
    education: PropTypes.string,
    exp: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
}

JobMiddleInfo.defaultProps = {}

export default JobMiddleInfo
