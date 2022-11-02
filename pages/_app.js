import '../styles/globals.css'
import Layout from '../components/layout'
import '../styles/WelcomeSection.css'
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
