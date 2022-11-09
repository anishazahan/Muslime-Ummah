import { useSelector } from "react-redux"
import SingleBlog from "./SingleBlog";
import ServicesBreadcam from "../services/ServicesBreadcam"
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const blogs = useSelector(state => state.blog.blogs)
  console.log(blogs);
  return (
    <div>
      <ServicesBreadcam logoText={"Blog List"} />
      <BlogDetails></BlogDetails>
      {/* <div className='flex flex-wrap justify-center mx-auto my-20'>
        {
          blogs.map(blog => <SingleBlog blog={blog} />)
        }
      </div> */}
    </div>
  )
}

export default Blogs