/*
   this page is for /explore
 */
import { METRIC } from '@/constant'

import { exploreSEO } from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
// import ExploreContent from '@/containers/content/ExploreContent'

export const getServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: false,
      destination: '/home',
    },
  }
}

const ExplorePage = (props) => {
  const store = useStore()
  store.mark(props)
  const seoConfig = exploreSEO()

  return (
    <GlobalLayout metric={METRIC.EXPLORE} seoConfig={seoConfig} noSidebar>
      {/* <ExploreContent /> */}
    </GlobalLayout>
  )
}

export default ExplorePage
