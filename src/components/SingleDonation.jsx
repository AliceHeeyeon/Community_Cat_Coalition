import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Helmet } from 'react-helmet'

const donationUrl = import.meta.env.VITE_WC_DONATIONS_URL

const SingleDonation = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [donation, setDonation] = useState(null)
    const [loading, setLoading] = useState(true)

    const endPoint = `${donationUrl}/${id}`
    console.log(endPoint);

    useEffect(() => {
        axios.get(endPoint)
        .then((res) => {
            setDonation(res.data)
            const timeout = setTimeout(() => setLoading(false), 1000);
        })
        .catch((err) => console.log(err))
    },[endPoint])

    if (loading) {return (<Loading/>)}

    function priceWithDecimal(price) {
        return (price / 100).toFixed(2)
    }

    function getFeaturedImage(donation) {
        if (donation && donation.images && donation.images[0]) {
            return donation.images[0].src
        } else {
            return 'https://placehold.co/600x400'
        }
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

      <div id='single-donation-page' className='page-container'>
        <div className='item-container'>
          <button onClick={() => navigate(-1)}><MdArrowBackIosNew/>Go Back</button>
          <img className='donation-image' src={getFeaturedImage(donation)} alt={donation.name}/>
          <h4>{donation.name}</h4>
          <h3>${priceWithDecimal(donation.prices.price)}</h3>
          <div id='donation-description' dangerouslySetInnerHTML={{__html: donation.description}}/>
        </div>
      </div>
    </>
  )
}

export default SingleDonation
