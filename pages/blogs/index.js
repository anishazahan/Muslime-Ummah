import { useSelector } from "react-redux"
import SingleBlog from "./SingleBlog";
import ServicesBreadcam from "../services/ServicesBreadcam"
import BlogDetails from "./[id]";

const Blogs = () => {
  const blogs = useSelector(state => state.blog.blogs)
  console.log(blogs);
  return (
    <div>
      <ServicesBreadcam logoText={"Blog List"} />
      {/* <BlogDetails></BlogDetails> */}
      <div className='w-10/12 flex justify-center flex-wrap mx-auto my-20'>
        {
          blogs.map(blog => <SingleBlog blog={blog} />)
        }
      </div>
    </div>
  )
}

export default Blogs