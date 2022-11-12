import Footer from './Footer/Footer'
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import getUsers from '../store/user/userAction'
import getServices from "../store/service/serviceAction";
import getBlogs from "../store/blog/blogAction";
import getEvents from "../store/event/eventAction";
import getTeam from "../store/team/teamAction";
import getDonations from '../store/donation/donationAction';

export default function Layout({ children }) {
     const dispatch = useDispatch()
     let store = useSelector(state => state)
     useEffect(() => {
          dispatch(getUsers())
          dispatch(getServices())
          dispatch(getBlogs())
          dispatch(getEvents())
          dispatch(getTeam())
          dispatch(getDonations())
     }, [dispatch])
     // console.log(store)
     return (
          <>
               <Header />
               <Navbar />
               <main>{children}</main>
               <Footer />
          </>
     )
}