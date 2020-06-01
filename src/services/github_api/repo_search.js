import { isEmpty, forEach } from 'ramda'
import { timeout } from 'promise-timeout'

import { TIMEOUT_SEC, restEndpoint } from './config'
import { graphqlClient, restClient } from './client'

import S from './schema'

const baseInfoQuery = (owner, name) => {
  return graphqlClient.request(S.repository, { owner, name })
}

const contributorsQuery = (owner, name) => {
  const path = 'contributors?page=1&per_page=8'
  const api = `${restEndpoint}/repos/${owner}/${name}/${path}`

  return restClient(`${api}`, 'json')
}

const readmeQuery = (owner, name) => {
  return restClient(`${restEndpoint}/repos/${owner}/${name}/readme`, 'raw')
}

/**
 * @param {string} owner: repo owner
 * @param {string} name: repo name
 *
 * NOTE:  use readmeQuery for readme instead of graphql is readme
 * has a lots of ext, like readme.md | readme.markdown ...
 *
 */
export const searchRepoPromise = (owner, name) =>
  Promise.all([
    timeout(baseInfoQuery(owner, name), TIMEOUT_SEC),
    timeout(contributorsQuery(owner, name), TIMEOUT_SEC),
    timeout(readmeQuery(owner, name), TIMEOUT_SEC),
  ])

const getRelaseTag = releases => {
  if (isEmpty(releases.nodes)) return ''
  return releases.nodes[0].tag.name
}

const getLicense = value => {
  if (!value) return ''
  return value.key
}

// transform to match our model
export const transformRepo = res => {
  const baseInfoRes = res[0].repository
  const contributorsRes = res[1]
  const readme = res[2]
  const contributors = []

  forEach(user => {
    contributors.push({
      nickname: user.login,
      htmlUrl: user.html_url,
      avatar: user.avatar_url,
    })
  }, contributorsRes)

  const {
    name,
    description,
    url,
    owner,
    stargazers,
    pullRequests,
    issues,
    watchers,
    forkCount,
    licenseInfo,
    homepageUrl,
    releases,
    primaryLanguage,
  } = baseInfoRes

  return {
    title: name,
    ownerName: owner.login,
    ownerUrl: owner.url,
    repoUrl: url,

    desc: description,
    homepageUrl,
    readme,

    issuesCount: issues.totalCount,
    prsCount: pullRequests.totalCount,
    starCount: stargazers.totalCount,
    forkCount,
    watchCount: watchers.totalCount,

    primaryLanguage: primaryLanguage || { name: 'html', color: '#EB4B31' },
    license: getLicense(licenseInfo),
    releaseTag: getRelaseTag(releases),
    contributors,
  }
}
