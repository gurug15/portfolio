
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <div className="mx-2 w-10 font-extrabold text-5xl">GG</div>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
        <FaLinkedin />
        <FaInstagram/>
        <FaXTwitter/>
        <FaGithub/>
      </div>
    </nav>
  )
}

export default Navbar