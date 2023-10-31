import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useImage } from '../hooks/useImageContext'
import Loading from './Loading'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const SingleAdoption = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [cat, setCat] = useState(null)
    const [loading, setLoading] = useState(true)
    const getFeaturedImage = useImage()
   
    const endPoint = `${baseUrl}/adoptions/${id}?_embed`

    useEffect(() => {
        axios.get(endPoint)
        .then((res) => {
            setCat(res.data)
            const timeout = setTimeout(() => setLoading(false), 1000);
        })
        .catch((err) => console.log(err))
    },[id])

    if (loading) {
      return (<Loading/>)
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
      
      <div className='page-container'>
          <button className='back-btn' onClick={() => navigate(-1)}><MdArrowBackIosNew/>Go Back</button>
          <div className='post-container'>
            <h4 className='title'>{cat.title.rendered}</h4>
            <img src={getFeaturedImage(cat)} alt={cat.slug} />
            <div className='contents' dangerouslySetInnerHTML={{__html: cat.content.rendered}}/>
          </div>
      </div>
    </>
  )
}

export default SingleAdoption
