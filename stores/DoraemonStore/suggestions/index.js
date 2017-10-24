export { default as pl } from './pl'
export { default as framework } from './framework'
export { default as database } from './database'

// '/ruby': { page: '/', query: { name: 'ruby' } },
/*
const route = {}
R.forEachObjIndexed(v => {
  route[v.raw] = { page: '/', query: { name: `${v.raw}` } }
}, pl)

const fuck = mapKeys(R.toLower, route)
const fuck2 = mapKeys(k => `'/${k}'`, fuck)

// console.log('config pl: ', pl)

// console.log('fuck: ', fuck)
// console.log('fuck: ', fuck2)
*/

// export const communityRoutes = fuck2
