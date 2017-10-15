import R from 'ramda'

/*
   export { default as pl } from './pl'
   export { default as framework } from './framework'
   export { default as cmd } from './cmd'
 */

import pl from './pl'
import framework from './framework'
import cmd from './cmd'

import { mapKeys } from '../../../utils/functions'

export const allSuggestions = mapKeys(
  R.toLower,
  R.mergeAll([pl, framework, cmd])
)

export const plAndFrameworkKeys = R.keys(
  mapKeys(R.toLower, R.mergeAll([pl, framework]))
)
