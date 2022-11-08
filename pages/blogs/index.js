import { useSelector } from "react-redux"
import SingleBlog from "./SingleBlog";
import ServicesBreadcam from "../services/ServicesBreadcam"

const Blogs = () => {
  const blogs = useSelector(state => state.blog.blogs)
  console.log(blogs);
  return (
    <div>
      <ServicesBreadcam logoText={"Blog List"} />
      <div className='flex flex-wrap justify-center mx-auto'>
        {
          blogs.map(blog => <SingleBlog blog={blog} />)
        }
      </div>
    </div>
  )
}

export default Blogs