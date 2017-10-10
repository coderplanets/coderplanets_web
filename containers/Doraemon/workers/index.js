import R from 'ramda'
import { Observable } from 'rxjs/Observable'
import { mapKeys, notEmpty } from '../../../utils/functions'
import { pl, framework, cmd } from '../suggestions'

const allSuggestions = mapKeys(R.toLower, R.mergeAll([pl, framework, cmd]))
const cleanMetaInfo = R.omit(['desc', 'title', 'raw', 'parent'])

const cmdSplit = R.compose(R.split('/'), R.slice(1, Infinity))
const cmdFull = R.compose(R.filter(notEmpty), cmdSplit)
const cmdHead = R.compose(R.head, cmdSplit)
const cmdLast = R.compose(R.last, cmdFull)
const cmdInit = R.compose(R.init, cmdFull)

const getSuggestionPath = R.curry(p => R.path(p, allSuggestions))
const suggestionPathInit = R.compose(cleanMetaInfo, getSuggestionPath, cmdInit)

const suggestionPath = R.compose(cleanMetaInfo, getSuggestionPath, cmdFull)
const suggestionPathThenStartsWith = R.curry(val =>
  R.pickBy((_, k) => R.startsWith(cmdLast(val), k), suggestionPathInit(val))
)
// ... export ...
export const startWithSlash = R.startsWith('/')

export const startWithSpecialPrefix = R.anyPass([
  R.startsWith('?'),
  R.startsWith('>'),
  R.startsWith('<'),
])

export const walkSuggestion = R.ifElse(
  R.endsWith('/'),
  suggestionPath,
  suggestionPathThenStartsWith
)

const suggestionBreif = R.compose(
  R.values,
  R.map(R.pick(['title', 'desc', 'raw'])),
  walkSuggestion
)

export const relateSuggestions = R.curry(val => ({
  prefix: cmdSplit(val).length > 1 ? cmdHead(val) : '/',
  data: suggestionBreif(val),
}))

export const relateSuggestions$ = q =>
  Observable.fromPromise(new Promise(resolve => resolve(relateSuggestions(q))))

export const specialSuggestions = R.curry(val => ({
  prefix: '/',
  data: [getSuggestionPath(val)],
}))
