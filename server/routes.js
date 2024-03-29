/* eslint-disable @typescript-eslint/no-var-requires */

const router = require('express').Router()
const { parse } = require('url')

const app = require('./app')
const { renderAndCache } = require('./helper')

const handle = app.getRequestHandler()

// const HOME_PAGE = '/home'

router.route('/_next/:page?').get((req, res) => handle(req, res))
router
  .route('/__nextjs_original-stack-frame')
  .get((req, res) => handle(req, res))

router
  .route(/^\/service-worker\.js$/)
  .get((req, res) => res.sendFile('.next/sw.js', { root: '.' }))

router
  .route(/^\/service-worker\.js.map$/)
  .get((req, res) => res.sendFile('.next/sw.js.map', { root: '.' }))

// PWA, service-work Staff
router
  .route(
    /^\/sw\.js$|^\/sw\.js.map$|^\/(workbox|worker|fallback)-\w+\.js$|^\/(workbox|worker|fallback)-\w+\.js.map$/,
  )
  .get((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const filePath = `.next${pathname}`

    res.sendFile(filePath, { root: '.' })
  })

// oauth popup window
router.route('/oauth/').get((req, res) => renderAndCache({ req, res }))

// // 将首页重定向到 HOME_PAGE
// router
//   .route('/')
//   .get((req, res) => renderAndCache({ req, res, path: '/index' }))

router.route('/').get((req, res) => {
  return renderAndCache({ req, res, path: '/index' })
})

// 来一杯
router.route('/have-a-drink/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/have-a-drink' })
})

// 热点
router.route('/trending/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/trending' })
})

// 赞助与广告
router.route('/sponsor').get((req, res) => {
  return renderAndCache({ req, res, path: '/sponsor' })
})

// 友情链接
router.route('/friends').get((req, res) => {
  return renderAndCache({ req, res, path: '/friends' })
})

// 支持我们
router.route('/support-us').get((req, res) => {
  return renderAndCache({ req, res, path: '/support-us' })
})

// 升级账户
router.route('/membership').get((req, res) => {
  return renderAndCache({ req, res, path: '/membership' })
})

// 社区订阅
router.route('/subscribe').get((req, res) => {
  return renderAndCache({ req, res, path: '/subscribe' })
})

// // 代码片段
// router.route('/recipes').get((req, res) => {
//   return renderAndCache({ req, res, path: '/recipes' })
// })

// 小聚
router.route('/meetups').get((req, res) => {
  return renderAndCache({ req, res, path: '/meetups' })
})

// 酷导航
router.route('/cool-guide').get((req, res) => {
  return renderAndCache({ req, res, path: '/cool-guide' })
})

// 作品集市
router.route('/plaza').get((req, res) => {
  return renderAndCache({ req, res, path: '/plaza' })
})

// 单个作品详情
router.route('/works/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/works/${id}` })
})

// 用户页
router.route('/u/:login').get((req, res) => {
  const { login } = req.params
  return renderAndCache({ req, res, path: `/user/${login}` })
})

router.route('/user/:login').get((req, res) => {
  const { login } = req.params
  return renderAndCache({ req, res, path: `/user/${login}` })
})

// 帖子页
router.route('/post/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/post/${id}` })
})

// 工作页
router.route('/job/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/job/${id}` })
})

router.route('/blog/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/blog/${id}` })
})

router.route('/radar/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/radar/${id}` })
})
// repo 帖子页
// router.route('/:community/repo/:id').get((req, res) => {
//   return renderAndCache({ req, res, path: '/repo' })
// })

// 申请新社区
router.route('/apply/community').get((req, res) => {
  return renderAndCache({ req, res, page: '/apply/community' })
})

// 创建新帖子
router.route('/publish/post').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/post' })
})

// 编辑帖子
router.route('/update/post/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/update/post/${id}` })
})

// 创建新工作
router.route('/publish/job').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/job' })
})

// 编辑工作
router.route('/update/job/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/update/job/${id}` })
})

// 创建新博客
router.route('/publish/blog').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/blog' })
})

// 编辑 rss 作者
router.route('/update/rss').get((req, res) => {
  return renderAndCache({ req, res, path: '/update/rss' })
})

// 创建新作品
router.route('/publish/works').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/works' })
})

// 编辑作品
router.route('/update/works/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/update/works/${id}` })
})

// 创建新雷达
router.route('/publish/radar').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/radar' })
})

// 编辑雷达
router.route('/update/radar/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/update/radar/${id}` })
})

// 所有社区
router.route('/explore').get((req, res) => {
  return renderAndCache({ req, res, path: '/explore' })
})
// router.route('/explore').get((req, res) => res.redirect('/explore/pl'))

// router.route('/explore/:category').get((req, res) => {
//   return renderAndCache({ req, res, path: '/explore' })
// })

// 帮助中心
router.route('/:community/help-center').get((req, res) => {
  return renderAndCache({ req, res, path: '/help-center' })
})

// 社区主页
router.route('/:community/:thread').get((req, res) => {
  return renderAndCache({ req, res, path: '/index' })
})

// 社区主页
router.route('/:community').get((req, res) => {
  const { community } = req.params
  return renderAndCache({ req, res, path: `/${community}` })
})

router.route('*').get((req, res) => handle(req, res))

module.exports = router
