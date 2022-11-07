import Home from "./home/Home";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import getUsers from '../store/user/userAction'
import getServices from "../store/service/serviceAction";
import getBlogs from "../store/blog/blogAction";
import getEvents from "../store/event/eventAction";

export default function Main() {
  const dispatch = useDispatch()
  let store = useSelector(state => state)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getServices())
    dispatch(getBlogs())
    dispatch(getEvents())
  }, [dispatch])
  console.log("store", store)

  return (
    <>
      <Home />
    </>
  )
}
