import React from 'react'
// import { either, isNil, isEmpty } from 'ramda'

import { ICON_CMD } from '@/config'

// import BackgroundList from './BackgroundList'
import { Section, Icon, Desc } from './styles/extra_info'

// const emptyBacgrounds = either(isNil, isEmpty)

const ExtraInfo = ({ user }) => {
  return (
    <React.Fragment>
      <Section>
        <Icon src={`${ICON_CMD}/profile_location.svg`} />{' '}
        {/* <Desc>{user.location}</Desc> */}
        <Desc>成都</Desc>
      </Section>
      {/* {!emptyBacgrounds(user.workBackgrounds) && (
        <Section hide={emptyBacgrounds(user.workBackgrounds)}>
          <Icon src={`${ICON_CMD}/profile_company.svg`} />{' '}
          <BackgroundList type="work" user={user} first />
        </Section>
      )}

      {!emptyBacgrounds(user.educationBackgrounds) && (
        <Section hide={emptyBacgrounds(user.educationBackgrounds)}>
          <Icon src={`${ICON_CMD}/profile_education.svg`} />{' '}
          <BackgroundList type="education" user={user} first />
        </Section>
      )} */}
    </React.Fragment>
  )
}

export default React.memo(ExtraInfo)
