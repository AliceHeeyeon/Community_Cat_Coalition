import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri'
import MobileMenu from './MobileMenu'
import useCustomiser from '../hooks/useCustomiser'

const Header = () => {
    const [menuIsOpen, openMenu] = useState(false)
    const {btnColor} = useCustomiser()

    useEffect(() => {
      const firstLetterOfLogo = document.querySelectorAll(".logo")
  
      firstLetterOfLogo.forEach(letter => {
        letter.style.color = `${btnColor}`
      })
     
    }, [btnColor])

    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen)
        document.body.classList.toggle('no-scroll')
    }
  return (
    <nav>
        <div id='topnav'>
            <div id='logo'>
                <Link to='/'>
                    <div id='logo'>
                        <span className='logo'>C</span>ommunity
                        <p>
                            <span className='logo'>C</span>at<span className='logo'>C</span>oalition
                        </p>
                    </div>
                </Link>
            </div>

            {/* desktop menu */}
            <ul id='menu'>
                <li>
                    <Link to='/aboutus'>About Us</Link>
                </li>
                <li>
                    <Link to='/articles'>Articles</Link>
                </li>
                <li>
                    <Link to='/membership'>Membership & Volunteer</Link>
                </li>
                <li>
                    <Link to='/donations'>Donations</Link>
                </li>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
            </ul>
            <button id='nav-adoption-button' className='button'>
                    <Link to='/adoptions'>ADOPTIONS</Link>
            </button>
            
            {/* Hamburger on desktop */}
            <div id='menu-container'>
                <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                    <RiMenu3Fill id='hamburger-icon'/>
                </button>
            </div>
        </div>

        {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </nav>
  )
}

export default Header
