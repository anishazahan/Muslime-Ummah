import { AiFillStar } from "react-icons/ai";

const SidebarBlog = () => {
    const news = [
        {
             newsName: "OUR FUNERAL SERVICES",
            condition:"Free",
             name: "MUFTI ABDUL",
             img: "http://kodeforest.net/html/islamic/extra-images/feature.jpg"
        },
        {
             newsName: "OUR FUNERAL SERVICES",
            condition:"Free",
             name: "MUFTI ABDUL",
             img: "http://kodeforest.net/html/islamic/extra-images/feature1.jpg"
        },
        {
             newsName: "OUR FUNERAL SERVICES",
            condition:"Free",
             name: "MUFTI ABDUL",
             img: "http://kodeforest.net/html/islamic/extra-images/feature2.jpg"
        }
       
   ]
  return (
    <div className="bg-slate-100 flex flex-col pb-10">
        <div className="inline mb-2 mx-auto md:mx-0">
          <h2 className="font-semibold border-b-2 border-green-900 inline-block text-[17px] tracking-wide mt-[1.5rem] my-2 mx-8 px-2 mb-4">
        Recent News
          </h2>
        </div>
        <div className="flex flex-col space-y-6 mx-auto lg:mx-0">
            {
                news.map(singleNews=>{
                    return  <div className="flex pl-6 pr-3 space-x-3 items-stretch">
                    <div className="news-left">
                        <img className="h-full object-cover" src={singleNews.img} alt="" />
                    </div>
                    <div className="news-right">
                     <h2 className="text-[14px] font-semibold">{singleNews.newsName}</h2>
                     <div className="flex items-center justify-between my-1">
                        <p className="text-white px-3 rounded py-1 bg-primary text-sm">Free</p>
                        <div className="star-icon flex text-pink-500">
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                     </div>
                     <h2 className="text-[14px] text-gray-700">{singleNews.name}</h2>
                    </div>
                    
                </div>

                })
            }

        </div>
       
       
          
    
          </div>
  )
}

export default SidebarBlog