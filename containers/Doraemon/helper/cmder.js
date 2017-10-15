import R from 'ramda'

import { lengthE1, lengthE2 } from '../../../utils/functions'
import { plAndFrameworkKeys } from '../suggestions'

export const stepOneCmd = R.curry((name, cmdpath) =>
  R.and(R.equals(name, R.head(cmdpath)), lengthE1(cmdpath))
)

export const stepTwoCmd = R.curry((name, cmdpath) =>
  R.and(R.equals(name, R.head(cmdpath)), lengthE2(cmdpath))
)

export const stepOneLink = R.curry(cmdpath =>
  R.and(R.contains(R.head(cmdpath), plAndFrameworkKeys), lengthE1(cmdpath))
)

export const stepTwoLink = R.curry(cmdpath =>
  R.and(R.contains(R.head(cmdpath), plAndFrameworkKeys), lengthE2(cmdpath))
)
