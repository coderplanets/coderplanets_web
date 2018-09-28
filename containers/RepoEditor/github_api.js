import R from 'ramda'
import fetchJsonp from 'fetch-jsonp'

import S from './schema'
import { makeGithubExplore, ERR, BStore } from '../../utils'

// const BStore
const token = BStore.get('github_token')

const graphqlEndpoint = 'https://api.github.com/graphql'
const graphqlClient = makeGithubExplore(graphqlEndpoint, token)

const v3Endpoint = 'https://api.github.com'
const v3EndpointOpt = {
  headers: { Authorization: `token ${token}` },
}

const baseInfoQuery = (owner, name) =>
  graphqlClient.request(S.simpleQuery, { owner, name })

const contributorsQuery = (owner, name) => {
  const path = 'contributors?page=1&per_page=8'
  const api = `${v3Endpoint}/repos/${owner}/${name}/${path}`
  // console.log('maybe api limit: ', r.json())
  return fetchJsonp(`${api}`, v3EndpointOpt).then(r => r.json())
}

const getRelaseTag = releases => {
  if (R.isEmpty(releases.nodes)) return ''
  return releases.nodes[0].tag.name
}
const githubApi = {
  search: (owner, name) =>
    Promise.all([baseInfoQuery(owner, name), contributorsQuery(owner, name)]),

  parseError: e => {
    if (!e || !e.response) return ERR.UNKOWN
    switch (e.response.status) {
      case 200: {
        return ERR.NOT_FOUND
      }
      case 401: {
        return ERR.AUTH
      }
      default: {
        return ERR.UNKOWN
      }
    }
  },
  transForm: values => {
    const baseInfoRes = values[0].repository
    const contributorsRes = values[1].data
    const contributors = []

    R.forEach(user => {
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
      object,
      primaryLanguage,
    } = baseInfoRes

    return {
      title: name,
      ownerName: owner.login,
      ownerUrl: owner.url,
      repoUrl: url,

      desc: description,
      homepageUrl,
      readme: object.text,

      issuesCount: issues.totalCount,
      prsCount: pullRequests.totalCount,
      starCount: stargazers.totalCount,
      forkCount,
      watchCount: watchers.totalCount,

      primaryLanguage,
      license: licenseInfo.key,
      releaseTag: getRelaseTag(releases),
      contributors,
    }
  },
}

export default githubApi
