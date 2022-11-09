import { FiUser } from "react-icons/fi";
import { MdOutlineUpdate } from "react-icons/md";
import { FaComment, FaQuoteLeft } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { FaShare } from "react-icons/fa";
const BlogDetails = () => {
  return (
    <div className="container px-6 lg:px-20 mx-auto my-12 lg:my-28">
      <div className="blogDetails-img w-full lg:w-[70%] relative overflow-hidden">
        <img
          className="w-full h-full hover:scale-[1.2] duration-700"
          src={
            "https://ihsan.templines.org/wp-content/uploads/2019/07/post004.jpg"
          }
          alt=""
        />
        <div className="flex absolute left-4 right-0 bottom-7 space-x-2">
          <button className="text-xs rounded text-white px-3 py-2 bg-primary">
            Prayer Service
          </button>
          <button className="text-xs rounded text-white px-3 py-2 bg-primary">
            Ramdan
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start lg:mx-0 space-y-1 md:space-y-0 my-4 space-x-6">
        <div className="flex items-center space-x-1">
          <p>
            <FiUser className=" text-primary font-semibold"></FiUser>
          </p>
          <h2 className="text-xs text-gray-500"> By Zaymund Alex </h2>
        </div>
        <div className="flex items-center space-x-1">
          <p>
            <MdOutlineUpdate className=" text-primary font-semibold"></MdOutlineUpdate>
          </p>
          <h2 className="text-xs text-gray-500"> July 30, 2019 </h2>
        </div>
        <div className="flex items-center space-x-1">
          <p>
            <FaComment className=" text-black font-semibold"></FaComment>
          </p>
          <h2 className="text-xs text-gray-500"> 1 comments </h2>
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-600 mb-3">
          Moveth the seed you waters is replenish light one meat. Under divide
          image likeness their may, form Earth evening moving. Heaven was have
          upon god place dry one creepeth one days divided. For fruitful blessed
          void days seasons wherein dry She’d light creeping that grass, is rule
          rule. Waters midst i him lesser.
        </p>
      </div>

      {/* ---------------------------------
       middle section for blog
  ----------------------------------- */}

      <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-stretch flex-col-reverse">
        <div className="left-content w-full mx-auto lg:w-[75%] order-1 ">
          <p className="text-sm text-gray-600 leading-6">
            Evening together all was night fourth gathered. Whales is form. Deep
            blessed. Every Have good and. Called every. You’ll his void fourth
            is fifth it greater seasons place, signs they’re days let his meat,
            tree which let signs light night stars his third .
          </p>
          <p className="text-sm text-gray-600 my-3 leading-6 ">
            Evening together all was night fourth gathered. Whales is form. Deep
            blessed. Every Have good and. Called every. You’ll his void fourth
            is fifth it greater seasons place, signs they’re days let his meat,
            tree which let signs light night stars his third .
          </p>
          <p className="text-sm text-gray-600 mb-3 leading-6 ">
            So bring Moveth seasons kind made over let. His. They’re Our moved,
            forth evening. Beginning together. Living deep be were own you fifth
            under. Us under. Him there second so. You’re bearing evening seas
            man first. Place second be, may stars brought darkness shall heaven
            green days, upon multiply beginning male air. Fruitful him isn’t
            day. Yielding fill. He saw replenish winged stars earth days void
            heaven, female which is. Bring creeping you’re stars gathered. Said
            second open two can’t divide..
          </p>
        </div>
        <div className="right-content w-full mx-auto lg:w-[25%] mb-3 order-1">
          <img
            className="h-full object-cover"
            src={
              "https://ihsan.templines.org/wp-content/uploads/2019/08/Service-Box-Image-1-300x200.jpg"
            }
            alt=""
          />
        </div>
      </div>

      {/* ---------------------------------
       bottom description section for blog
  ----------------------------------- */}

      <div className="quate-background py-8 relative">
        <p>
          <FaQuoteLeft className="text-4xl text-yellow-50 mx-auto"></FaQuoteLeft>
        </p>
        <h2 className="text-center my-4 text-white tracking-widest text-xl font-medium">
          Islam teaches tolerance, not hatred universal <br />
          brotherhood, not enmity peace, and not violence.
        </h2>
        <div className="bg-black/40 inset-0 absolute"></div>
      </div>

      <p className="text-sm text-gray-600 my-4 ">
        Earth. Creature greater firmament dry likeness, seas she’d seas unto.
        Don’t. Also forth darkness. Second deep his earth life. Bring fifth
        open.
      </p>
      <p className="text-sm text-gray-600 mb-3 leading-6">
        And fourth they’re kind let appear said forth every sea. Open. Grass
        very brought their itself divided, let dominion saw. Said after you
        firmament sea replenish. Upon fifth female forth you’re fish doesn’t be
        earth were abundantly kind together make male Living, a blessed said
        hath firmament heaven. Dry subdue was green dominion i heaven morning
        she’d god. It every. Moved night dry he greater the evening under. Fifth
        together, their. Without divide saw were heaven fill is Beast to years
        grass may make beginning won’t fruitful, fifth his fill unto first
        third.
      </p>
      <div className="">
        <ul className="list-item text-gray-600">
          <li>Light moved seas said stars</li>
          <li>Alikeness likeness tree place</li>
          <li>Grass very brought their itself divided</li>
        </ul>
      </div>
      <p className="text-sm text-gray-600 my-3 leading-6 ">
        And fourth they’re kind let appear said forth every sea. Open. Grass
        very brought their itself divided, let dominion saw. Said after you
        firmament sea replenish. Upon fifth female forth you’re fish doesn’t be
        earth were abundantly kind together make male Living, a blessed said
        hath firmament heaven. Dry subdue was green dominion i heaven morning
        she’d god. It every. Moved night dry he greater the evening under. Fifth
        together, their. Without divide saw were heaven fill is Beast to years
        grass may make beginning won’t fruitful, fifth his fill unto first
        third.
      </p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mx-auto space-x-3 justify-center my-12 md:my-16 text-center">
        <div className="">
          <button className="text-xs rounded text-white px-3 py-2 bg-primary">
            Donation and Charity
          </button>
        </div>
        <div className="">
          <button className="text-xs rounded text-white px-3 py-2 bg-primary">
            Islamic Center
          </button>
        </div>
        <div className="">
          {/* <HiShare></HiShare> */}
          <button className="text-xs rounded text-white px-3 py-2 bg-primary">
            Share
          </button>
        </div>
      </div>

      {/* ---------------------------------
       comment section for blog
  ----------------------------------- */}

      <h2 className="text-xl lg:text-2xl tracking-wide font-semibold my-10 text-center md:text-left">
        Comments(1)
      </h2>
      <div className="flex flex-col md:flex-row space-x-4">
        <div className="comment-img md:w-[20%] md:h-[20%] w-[25%] mx-auto md:mx-o">
          <img
            className="w-full h-full rounded-full"
            src={
              "https://ihsan.templines.org/wp-content/uploads/2020/02/435543535.jpg"
            }
            alt=""
          />
        </div>
        <div className="comment">
          <div className="flex flex-col md:flex-row px-5 space-x-4 items-center">
            <h1 className="text-[18px] font-semibold">Zaymund Alex</h1>
            <p className="text-gray-500 text-sm">August 25, 2019, 10:40 a</p>
            <div className="flex items-center link cursor-pointer">
              <FaShare></FaShare>
              <p className="text-sm text-gray-700">Reply</p>
            </div>
          </div>
          <div className="lg:ml-3">
            <p className="text-sm text-gray-600 my-2 leading-6 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------
       reply comment section for blog
  ----------------------------------- */}
      <div className="comment-form mt-5">
        <h2 className="text-xl lg:text-2xl tracking-wide font-semibold my-10 text-center md:text-left">
          Leave a Reply
        </h2>
        <form>
          <div className="flex w-[100%] space-x-5">
            <div className="w-full">
              <input
                className="border border-2 px-5 w-full py-3 border-gray-300 placeholder-black outline-none"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
            <div className="w-full">
              <input
                className="border w-full border-2 px-5 py-3 border-gray-300 placeholder-black outline-none"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="my-10 flex space-x-3">
            <input type="checkbox" />
            <p className="text-sm text-gray-700">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <div className="w-full">
            <textarea
              className="border w-full border-2 px-5 py-3 border-gray-300 placeholder-black outline-none"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Comment*"
              required
            ></textarea>
          </div>
          <div className=" my-8">
            <input
              className="text-white px-4 py-3 bg-primary text-medium hover:bg-secondary duration-500 cursor-pointer"
              type="submit"
              value="Post Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
