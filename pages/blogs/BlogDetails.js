

const BlogDetails = () => {
  return (
    <div className="container px-10 lg:px-20 mx-auto my-28">

        <div className="blogDetails-img w-[70%] relative">
            <img className="w-full" src={'https://ihsan.templines.org/wp-content/uploads/2019/07/post004.jpg'} alt="" />
            <div className="flex absolute left-4 right-0 bottom-7 space-x-2">
                <button className="text-xs rounded text-white px-3 py-2 bg-primary">Prayer Service</button>
                <button className="text-xs rounded text-white px-3 py-2 bg-primary">Ramdan</button>
            </div>
        </div>




    </div>
  )
}

export default BlogDetails