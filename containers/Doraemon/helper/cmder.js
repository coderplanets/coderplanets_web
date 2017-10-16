import R from 'ramda'

import { lengthE1, lengthE2, mapKeys } from '../../../utils/functions'

// TODO; need refactor
import pl from '../../../stores/DoraemonStore/suggestions/pl'
import framework from '../../../stores/DoraemonStore/suggestions/framework'

export const plAndFrameworkKeys = R.keys(
  mapKeys(R.toLower, R.mergeAll([pl, framework]))
)

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
