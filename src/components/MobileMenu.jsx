import { useEffect } from "react"
import { Link } from "react-router-dom"
import { BsXLg } from "react-icons/bs"
import useCustomiser from "../hooks/useCustomiser"

const MobileMenu = ({closeMethod}) => {
  const {homeSectionColor} = useCustomiser()

  useEffect(() => {
    const mobileMenuBG = document.querySelector(".mobile-menu-container")

    mobileMenuBG.style.backgroundColor = `${homeSectionColor}`
  
  }, [homeSectionColor])

  return (
    <div className="mobile-menu-container">
      <button id="close-nav-menu" onClick={closeMethod}>
        <BsXLg />
      </button>

      <ul id="mobile-menu">
        <li>
            <Link to='/aboutus' onClick={closeMethod}>About Us</Link>
        </li>
        <li>
            <Link to='/articles' onClick={closeMethod}>Articles</Link>
        </li>
        <li>
            <Link to='/membership' onClick={closeMethod}>Membership & Volunteer</Link>
        </li>
        <li>
            <Link to='/donations' onClick={closeMethod}>Donations</Link>
        </li>
        <li>
            <Link to='/contactus' onClick={closeMethod}>Contact Us</Link>
        </li>
        <li>
            <Link to='/adoptions' onClick={closeMethod}>Adoptions</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
