import { FC, memo } from 'react'

// import DeveloperGallery from './DeveloperGallery'
import FamePeopleGallery from './FamePeopleGallery'

type TProps = {
  type: 'developer' | 'famous'
}

const PeopleGallery: FC<TProps> = ({ type }) => {
  return <FamePeopleGallery />
  // switch (type) {
  //   case 'developer': {
  //     return <DeveloperGallery {...restProps} />
  //   }
  //   default: {
  //     return <FamePeopleGallery {...restProps} />
  //   }
  // }
}

export default memo(PeopleGallery)
