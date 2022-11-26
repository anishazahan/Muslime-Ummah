import Link from "next/link"


const StyleBtn = ({ btnText }) => {
  return (
    <Link href="/" className=" font-medium rounded-sm px-3.5 py-3 m-1 overflow-hidden relative group cursor-pointer font-medium bg-primary text-white">
      <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-white transition duration-500 group-hover:text-white ease">{btnText}</span>
    </Link>
  )
}

export default StyleBtn