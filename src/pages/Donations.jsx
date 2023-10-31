import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import useCustomiser from '../hooks/useCustomiser'
import { Helmet } from 'react-helmet'

const donationsUrl = import.meta.env.VITE_WC_DONATIONS_URL

const Donations = () => {
  const [donations, setDonations] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(donationsUrl)
    .then((res) => {
      setDonations(res.data)
      const timeout = setTimeout(() => setLoading(false), 1000);
    })
    .catch((err) => console.log(err))
  },[])

  if (loading) {
    return (<Loading/>)
  }

  const Donations = ({donations}) => {
    const mappedDonations = donations.map((donation, index) => {
      const donationInCent = donation.prices.regular_price
      const donationAmount = (donationInCent / 100).toFixed(2)
      const {btnColor} = useCustomiser()

      useEffect(() => {
        const mainButtons = document.querySelectorAll(".button")

        mainButtons.forEach(button => {
          button.style.backgroundColor = `${btnColor}`
        })
      
      }, [btnColor])
      
      function getFeaturedImage(donation) {
        if (donation && donation.images && donation.images[0]) {
            return donation.images[0].src
        } else {
            return 'https://placehold.co/600x400'
        }
      } 

      return (
        <div className='donations' key={index}>
          <img className='product-image' src={getFeaturedImage(donation)} alt="Product Image"/>
          <Link className='donation-link' to={`/donations/${donation.id}`}>
            <h4 className='name'>{donation.name}</h4>
          </Link>
          <h4>${donationAmount} {donation.prices.currency_code}</h4>
        </div>
      )
    })

    return (
      <>
        {mappedDonations}
      </>
    ) 
  }

  return (
    <>
      <Helmet>
        <title>Community Cat Coalition - Donations</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Donations' />
        <meta name='description' content='Saving furry lives come at a cost other than time' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Donations" />
        <meta property="og:description" content="Saving furry lives come at a cost other than time" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Donations" />
        <meta property="twitter:description" content="Saving furry lives come at a cost other than time" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div id='donation-page' className='page-container'>
        <h3>Donation</h3>
        <p>
        Saving furry lives come at a cost other than time. Rescue equipment, food, veterinary care, flea and worming treatments etc – all these items are required on an ongoing basis.
        </p>
        <div id='donation-grid'>
          <Donations donations={donations}/>
        </div>
        <p className='donation-text'>
          We are a non-profit organisation (Charities Register Number 53259) and rely on donations and gifts to do what we do! 
          <span>
            We do not have paid staff or a fancy office to work from, every dollar donated goes towards the cats and kittens that are in the care of CCC members or in community cat colonies managed by CCC members.
          </span>

          <span>
            The work we do is only possible due to the generosity of our donors – Help us to save lives and please donate now!
          </span>
        </p>

        <p>
          You can also donate via our givealittle page.
        </p>
        <div className='givealittle'>
          <button className='button'>DONATE VIA GIVEALITTLE</button>
        </div>
        
      </div>
    </>
  )
  
}

export default Donations
