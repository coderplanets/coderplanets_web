//
/* import { fetch } from 'whatwg-fetch' */
import fetch from 'isomorphic-fetch'
import { BStore } from 'utils'

const endpoint = 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/asia.geo.json'
const bkey = 'asia.geo.data'

const fetchGeoData = () =>
  new Promise((resolve, reject) => {
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

export default fetchGeoData
