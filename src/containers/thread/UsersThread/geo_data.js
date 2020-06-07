//
/* import { fetch } from 'whatwg-fetch' */
import { ASSETS_ENDPOINT } from '@/config'
import { BStore } from '@/utils'

const endpoint = `${ASSETS_ENDPOINT}/asia.geo.json`
const bkey = 'asia.geo.data'

const fetchGeoData = () => {
  return new Promise((resolve, reject) => {
    const geoData = BStore.get(bkey)

    if (typeof geoData === 'object') return resolve(geoData)

    fetch(endpoint)
      .then(res => {
        const geoRes = res.json()
        geoRes.then(geoData => {
          BStore.set(bkey, geoData)
          return resolve(geoData)
        })
      })
      .catch(() => reject('error'))
  })
}

export default fetchGeoData
