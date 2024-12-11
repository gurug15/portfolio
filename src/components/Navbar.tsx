
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <div className="mx-2 w-10 font-extrabold text-5xl">GG</div>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
        <a className="cursor-pointer hover:text-blue-500" href="linkedin.com/in/guru-gastgar-67a125217/"><FaLinkedin /></a>
        <a className="cursor-pointer hover:text-pink-700" href="https://www.instagram.com/guru_gastgar/"><FaInstagram/></a>
        <a className="cursor-pointer hover:text-gray-700" href="https://twitter.com/GastgarGuru"><FaXTwitter/></a>
        <a className="cursor-pointer hover:text-black hover:bg-white rounded-full" href="https://github.com/gurug15"><FaGithub/></a>
      </div>
    </nav>
  )
}

export default Navbar
