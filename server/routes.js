/* eslint-disable @typescript-eslint/no-var-requires */

const router = require('express').Router()

const app = require('./app')
const { renderAndCache } = require('./helper')

const handle = app.getRequestHandler()

// const HOME_PAGE = '/home/posts'

router.route('/_next/:page?').get((req, res) => handle(req, res))

router
  .route('/service-worker.js')
  .get((req, res) => res.sendFile('.next/service-worker.js', { root: '.' }))

// oauth popup window
router.route('/oauth/').get((req, res) => renderAndCache({ req, res }))

// 将首页重定向到 HOME_PAGE
router
  .route('/')
  .get((req, res) => renderAndCache({ req, res, path: '/index' }))

// 来一杯
router.route('/have-a-drink/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/have-a-drink' })
})

// 热点
router.route('/trending/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/trending' })
})

// 赞助与广告
router.route('/sponsor/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/sponsor' })
})

// 支持我们
router.route('/support-us/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/support-us' })
})

// 升级账户
router.route('/membership/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/membership' })
})

// 社区订阅
router.route('/subscribe/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/subscribe' })
})

// 代码片段
router.route('/recipes/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/recipes' })
})

// 小聚
router.route('/meetups/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/meetups' })
})

// 酷导航
router.route('/cool-guide/:slug?').get((req, res) => {
  return renderAndCache({ req, res, path: '/cool-guide' })
})

// 作品集市
router.route('/works').get((req, res) => {
  return renderAndCache({ req, res, path: '/works/all' })
})
// 单个作品详情
router.route('/works/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/works/${id}` })
})

// 用户页
router.route('/user/:userId').get((req, res) => {
  return renderAndCache({ req, res, path: '/user' })
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

// repo 帖子页
// router.route('/:community/repo/:id').get((req, res) => {
//   return renderAndCache({ req, res, path: '/repo' })
// })

// 创建新社区
router.route('/publish/community').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/community' })
})

// 创建新帖子
router.route('/publish/post').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/post' })
})

// 编辑新帖子
router.route('/update/post/:id').get((req, res) => {
  const { id } = req.params
  return renderAndCache({ req, res, path: `/update/post/${id}` })
})

// 创建新帖子
router.route('/publish/job').get((req, res) => {
  return renderAndCache({ req, res, page: '/publish/job' })
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

// 所有社区
router.route('/explore').get((req, res) => res.redirect('/explore/pl'))

router.route('/explore/:category').get((req, res) => {
  return renderAndCache({ req, res, path: '/explore' })
})

// 帮助中心
router.route('/:community/help-center').get((req, res) => {
  return renderAndCache({ req, res, path: '/help-center' })
})

// 社区主页
router.route('/:community/:thread').get((req, res) => {
  return renderAndCache({ req, res, path: '/index' })
})

router.route('*').get((req, res) => handle(req, res))

module.exports = router
