import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-logo'>
          <h4>Community Cat Coalition</h4>
          <p>The humane solution for Auckland’s community cats</p>
        </div>
        <div className='footer-menu'>
          <div className='site-menu'>
            <h5>Site Map</h5>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Articles</li>
            </ul>
          </div>
          <div className='join-us'>
            <h5>Join Us</h5>
            <ul>
              <li>Membership</li>
              <li>Volunteer</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='help-us'>
            <h5>Help Us</h5>
            <ul>
              <li>Donation</li>
              <li>Give A Little</li>
              <li>Adoption</li>
            </ul>
          </div>
        </div>
      </footer>
      <small className='copy-right'>© 2023 Copyright CCC. All right reserved</small>
    </>
  )
}

export default Footer
