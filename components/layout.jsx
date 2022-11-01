import Footer from './Footer/Footer'
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";

export default function Layout({ children }) {
     return (
          <>
               <Header />
               <Navbar />
               <main>{children}</main>
               <Footer />
          </>
     )
}