import Home from "./home/Home";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import getUsers from '../store/user/userAction'
import getServices from "../store/service/serviceAction";

export default function Main() {
  const dispatch = useDispatch()
  let services = useSelector(state => state.service.services)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getServices())
  }, [dispatch])
  console.log(services)

  return (
    <>
      <Home />
    </>
  )
}
