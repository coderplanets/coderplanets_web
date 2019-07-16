import R from 'ramda'
import { useEffect } from 'react'
import Router from 'next/router'

import { ISSUE_ADDR } from '@config'
import { TYPE, EVENT, ERR, THREAD } from '@constant'
import {
  asyncSuit,
  buildLog,
  Global,
  dispatchEvent,
  prettyNum,
  cutFrom,
  errRescue,
} from '@utils'

// import S from '../schema'
import { jumpToCommunity, jumpToContent, goToHelpPage } from './jumper'
import { searchContents } from './search'

import Pocket from './Pocket'
import { SwissArmyKnife } from './swissArmyKnife'
import githubLoginHandler from './oauth/github_handler'

const log = buildLog('L:Doraemon')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  resv_event: [EVENT.QUERY_DORAMON],
})

let sub$ = null
let store = null
let pockect$ = null
let SAK = null
let cmdResolver = []

export const hidePanel = () => {
  emptySearchStates()
  store.hideDoraemon()
  pockect$.stop()
}

export const inputOnChange = ({ target: { value: inputValue } }) => {
  store.markState({ inputValue, cmdChain: null })
  queryPocket()
}

export const handleKeyDown = e => {
  switch (e.key) {
    case 'Tab': {
      SAK.completeInput()
      queryPocket()
      e.preventDefault()
      break
    }
    case 'Enter': {
      if (store.showThreadSelector) {
        doNavigate()
      } else {
        doSpecCmd()
      }

      e.preventDefault()
      break
    }
    // Prevent default behavior in text input while pressing arrow up
    // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
    case 'ArrowUp': {
      navSuggestion('up')
      e.preventDefault()
      break
    }
    case 'ArrowDown': {
      navSuggestion('down')
      e.preventDefault()
      break
    }
    default: {
      //  log('onKeyPress: ', e.key)
      break
    }
  }
}

// handle spec key input on input bar, like tab, enter...

export const navSuggestion = direction => SAK.navSuggestion(direction)
// mounseEnter
export const navToSuggestion = suggestion => SAK.navToSuggestion(suggestion)
export const suggestionOnSelect = () => {
  if (store.showThreadSelector) return doNavigate()
  doSpecCmd()
}

export const inputOnBlur = () => {
  return false
  // if (R.contains(store.prefix, ['/', '?', '@'])) {
  //   log('11')
  //   hidePanel()
  // }

  // if (!store.showThreadSelector && R.isEmpty(store.prefix)) {
  //   log('22')
  //   hidePanel()
  // }
}

// do dearch when thread changes
export const searchThreadOnChange = searchThread => {
  store.markState({ searchThread, showAlert: false })
  searchContents(store, sr71$, store.inputValue)
}

const queryPocket = () => pockect$.query(store.inputValue)

const doSpecCmd = () => {
  if (store.searching) return false
  const cmd = store.curCmdChain
  if (!cmd) return

  /* Do not use forEach, cause forEach will not break */
  for (let i = 0; i < cmdResolver.length; i += 1) {
    if (cmdResolver[i].match(cmd)) {
      return cmdResolver[i].action(cmd)
    }
  }
  return false
}

const doNavigate = () => {
  if (store.searching) return false

  // jump to user
  if (R.startsWith('user-raw', store.activeSuggestion.raw)) {
    const { raw } = store.activeSuggestion
    const login = raw.split('user-raw-')[1]
    const data = { login }
    const type = TYPE.PREVIEW_USER_VIEW

    dispatchEvent(EVENT.PREVIEW_OPEN, { type, data })
    return hidePanel()
  }

  // jump to community
  if (store.searchThread === 'community') {
    const { raw: communityRaw } = store.activeSuggestion

    jumpToCommunity(store, communityRaw)
    return hidePanel()
  }

  jumpToContent(store)
  // the sort is important
  hidePanel()
}

// load search suggestion and mark related search hint state
const loadSearchSuggestions = (data, searchedTotalCount) => {
  if (searchedTotalCount === 0) {
    store.markState({
      showAlert: true,
      showUtils: true,
      searchedTotalCount,
    })
  }
  store.markState({ searching: false, showUtils: true, searchedTotalCount })
  store.loadSuggestions({ prefix: '', data })
}

// clean up state after search complete
const emptySearchStates = () =>
  store.markState({
    searching: false,
    showThreadSelector: false,
    showAlert: false,
    showUtils: false,
    searchThread: 'community',
  })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('githubSignin'),
    action: ({ githubSignin: { user, token } }) => {
      store.setSession(user, token)
      Global.location.reload()
    },
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities }) => {
      const data = R.map(
        e => ({
          id: e.id,
          logo: e.logo,
          // raw: `community-raw-${e.id}`,
          raw: `${e.raw}`,
          title: e.title,
          desc: `${e.desc}`,
        }),
        searchCommunities.entries
      )
      const { totalCount } = searchCommunities
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers }) => {
      const data = R.map(
        e => ({
          id: e.id,
          logo: e.avatar,
          raw: `user-raw-${e.login}`,
          title: e.nickname,
          desc: `${e.bio}`,
        }),
        searchUsers.entries
      )
      const { totalCount } = searchUsers
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes('searchPosts'),
    action: ({ searchPosts }) => {
      const data = R.map(
        e => ({
          id: e.id,
          logo: e.author.avatar,
          raw: `post-raw-${e.id}`,
          title: e.title,
          desc: `${e.commentsCount}/${prettyNum(e.views)}  ${e.digest}`,
        }),
        searchPosts.entries
      )
      const { totalCount } = searchPosts
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes('searchJobs'),
    action: ({ searchJobs }) => {
      const data = R.map(
        e => ({
          id: e.id,
          logo: e.companyLogo,
          raw: `job-raw-${e.id}`,
          title: `${e.company} / ${e.title} / ${e.salary}`,
          desc: `${prettyNum(e.views)}  ${e.digest}`,
        }),
        searchJobs.entries
      )
      const { totalCount } = searchJobs
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes('searchVideos'),
    action: ({ searchVideos }) => {
      const data = R.map(
        e => ({
          id: e.id,
          logo: e.thumbnil,
          raw: `video-raw-${e.id}`,
          title: `${e.title} / ${e.source} / ${e.salary}`,
          desc: `${prettyNum(e.views)} ${e.duration}  ${e.desc}`,
        }),
        searchVideos.entries
      )
      const { totalCount } = searchVideos
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes('searchRepos'),
    action: ({ searchRepos }) => {
      const data = R.map(
        e => ({
          id: e.id,
          raw: `repo-raw-${e.id}`,
          title: `${e.ownerName} / ${cutFrom(e.title, 30)}`,
          desc: `star:${prettyNum(e.starCount)}  ${e.desc}`,
        }),
        searchRepos.entries
      )
      const { totalCount } = searchRepos
      loadSearchSuggestions(data, totalCount)
    },
  },
  {
    match: asyncRes(EVENT.QUERY_DORAMON),
    action: res => {
      const { data } = res[EVENT.QUERY_DORAMON]
      const forcus = false
      store.open(forcus)

      /* "doraemonInputbar" */

      store.markState({ inputValue: data })
      queryPocket()
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => store.markState({ searching: false }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.markState({ searching: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'Doraemon' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.markState({ searching: false })
      errRescue({ type: ERR.NETWORK, path: 'Doraemon' })
    },
  },
]

const initSpecCmdResolver = () => {
  cmdResolver = [
    {
      match: SAK.stepOneCmd('theme'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
      },
    },
    {
      match: SAK.stepOneCmd('login'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
      },
    },
    {
      match: SAK.stepOneCmd('log'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
        store.markState({
          inputForOtherUse: true,
          inputValue: Global.localStorage.getItem('log'),
        })
      },
    },
    {
      match: SAK.stepOneCmd('hforward'),
      action: () => {
        log('SAK.stepOneCmd hforward')
      },
    },
    {
      match: SAK.stepOneCmd('hbackward'),
      action: () => {
        log('SAK.stepOneCmd hbackward')
      },
    },
    {
      match: SAK.stepOneCmd('cheatsheet'),
      action: () => {
        log('SAK.stepOneCmd cheatsheet')
        Router.push(
          {
            pathname: '/',
            query: { main: 'cheatsheet' },
          },
          '/cheatsheet'
        )
        hidePanel()
      },
    },
    {
      match: SAK.stepOneCmd('communities'),
      action: () => {
        log('SAK.stepOneCmd communities')
        Router.push(
          {
            pathname: '/',
            query: { main: 'communities', sub: 'all' },
          },
          '/communities'
        )
        hidePanel()
      },
    },
    {
      match: SAK.stepTwoCmd('theme'),
      action: cmdpath => {
        const theme = R.last(cmdpath)
        store.changeTheme(theme)
        dispatchEvent(EVENT.SET_C11N, { data: { theme } })
      },
    },
    {
      match: SAK.stepTwoCmd('login'),
      action: cmdpath => {
        log('stepTwoCmd login->: ', cmdpath)
        switch (R.last(cmdpath)) {
          case 'github': {
            hidePanel()
            return githubLoginHandler(store, sr71$)
          }
          case 'weibo':
          case 'twitter':
          case 'google':
          case 'weixin': {
            const url = `${ISSUE_ADDR}/251`
            const win = window.open(url, '_blank')

            // see https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
            return win.focus()
          }
          default: {
            log('unsupported login method: ', cmdpath)
            return hidePanel()
          }
        }

        /* reference */
        /* http://www.graphql.college/implementing-github-oauth-flow-in-react */
        /* SAK.completeInput(true) */
        /* queryPocket() */
      },
    },
    {
      match: SAK.stepTwoCmd('log'),
      action: cmdpath => {
        const cmd = R.last(cmdpath)
        if (cmd === 'github') {
          Global.window.open('https://github.com/visionmedia/log', '_blank')
        } else if (cmd === 'write') {
          Global.localStorage.setItem('log', store.inputValue)
          hidePanel()
        }
      },
    },
    {
      match: SAK.communityLinker,
      action: cmdpath => {
        const community = cmdpath[0]
        hidePanel()
        jumpToCommunity(store, community)
      },
    },
    {
      match: SAK.communityInsideLinker,
      action: cmdpath => {
        log('communityInsideLinker: ', cmdpath)
      },
    },
    {
      match: SAK.stepOneCmd('help_1'),
      action: () => {
        Global.location.href = '/home/post/1'
        hidePanel()
      },
    },
    {
      match: SAK.stepOneCmd('help_37'),
      action: () => goToHelpPage('37'),
    },
    {
      match: SAK.stepOneCmd('help_38'),
      action: () => goToHelpPage('38'),
    },
    {
      match: SAK.stepOneCmd('help_40'),
      action: () => goToHelpPage('40'),
    },
    {
      match: SAK.stepOneCmd('help_41'),
      action: () => goToHelpPage('41'),
    },
    {
      match: SAK.stepOneCmd('help_42'),
      action: () => goToHelpPage('42'),
    },
    {
      match: SAK.stepOneCmd('help_43'),
      action: () => goToHelpPage('43'),
    },
  ]
}

// ###############################
// init & uninit handlers
// ###############################
export const useScrollbar = isMacOS => {
  useEffect(() => {
    if (isMacOS) {
      /* eslint-disable no-undef */
      OverlayScrollbars(document.getElementById('suggestion-scroller'), {})
    }
  }, [isMacOS])
}

export const useInit = _store => {
  useEffect(() => {
    store = _store

    pockect$ = new Pocket(store)
    SAK = new SwissArmyKnife(store)

    initSpecCmdResolver()

    pockect$.search().subscribe(res => {
      if (R.isEmpty(res)) return emptySearchStates()

      store.markState({
        searching: true,
        showThreadSelector: true,
        showAlert: false,
        showUtils: false,
      })
      searchContents(store, sr71$, res)
    })

    pockect$.searchUser().subscribe(name => {
      const nickname = R.slice(1, Infinity, name)
      store.markState({
        prefix: '@',
        searchThread: THREAD.USER,
        showThreadSelector: true,
        showAlert: false,
      })
      if (R.isEmpty(nickname)) return false
      searchContents(store, sr71$, nickname)
    })

    pockect$.cmdSuggesttion().subscribe(res => store.loadSuggestions(res))
    pockect$.emptyInput().subscribe(() => store.clearSuggestions())

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
