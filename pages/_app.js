import { Provider } from "react-redux";
import store from "../store/index";
import '../styles/globals.css'
import Layout from '../components/layout'
import '../styles/WelcomeSection.css'
import "swiper/css/bundle";
import '../styles/home.css'


function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
