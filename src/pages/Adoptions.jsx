import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import { useImage } from '../hooks/useImageContext'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Adoptions = () => {
    const [loading, setLoading] = useState(true)
    const [adoptions, setAdoptions] = useState(null)
    const getFeaturedImage = useImage()
    const endPoint = `${baseUrl}/adoptions?_embed`

    useEffect(() => {
        axios.get(endPoint)
        .then((res) => {
            console.log(res.data)
            setAdoptions(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    },[])

    if (loading) {
      return (<Loading/>)
    }

    const Cats = ({cats}) => {
      const mappedCats = cats.map((cat, index) => {
        return (
          <div key={cat.slug + "-" + index} className='cats'>
            <a href={`#/adoptions/${cat.id}`}>
              <img src={getFeaturedImage(cat)} alt={cat.slug} />
              <h4 className='name'>{cat.title.rendered}</h4>
            </a>
          </div>
        )
      })

      return (
        <>
          {mappedCats}
        </>
      )
    }

  return (
    <>
      <Helmet>
        <title>Community Cat Coalition - Adoptions</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Adoptions' />
        <meta name='description' content='Adorable cats are waiting for a new family' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Adoptions" />
        <meta property="og:description" content="Adorable cats are waiting for a new family" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Adoptions" />
        <meta property="twitter:description" content="Adorable cats are waiting for a new family" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div className='page-container adoption-page'>
        <h3>Adoptions</h3>
        <h5>Sort by Locations</h5>
        <ul>
          <Link className='donation-link' to={`/locations/16`}>
            <li>New Lynn</li>
          </Link>
          <Link className='donation-link' to={`/locations/17`}>
            <li>Glen Eden</li>
          </Link>
          <Link className='donation-link' to={`/locations/18`}>
            <li>Murrays Bay</li>
          </Link>
          <Link className='donation-link' to={`/locations/19`}>
            <li>Onehunga</li>
          </Link>
          <Link className='donation-link' to={`/locations/20`}>
            <li>Avondale</li>
          </Link>
        </ul>
        <div className='cats-container'>
          <Cats cats={adoptions} />
        </div>
      </div>
    </>
    
  )
}

export default Adoptions
