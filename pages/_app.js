import '../styles/globals.css'
import Layout from '../components/layout'
import '../styles/WelcomeSection.css'
import '../styles/Scholars.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
