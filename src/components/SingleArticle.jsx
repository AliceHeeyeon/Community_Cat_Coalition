import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useImage } from '../hooks/useImageContext'
import Loading from './Loading'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const SingleArticle = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const getFeaturedImage = useImage()
   
    const endPoint = `${baseUrl}/articles/${id}?_embed`

    useEffect(() => {
        axios.get(endPoint)
        .then((res) => {
            setArticle(res.data)
            const timeout = setTimeout(() => setLoading(false), 1000);
        })
        .catch((err) => console.log(err))
    },[id])
    console.log(article);

    if (loading) {
      return (<Loading/>)
    }

  return (
    <>
      <Helmet>
        <title>Community Cat Coalition - Articles</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Articles' />
        <meta name='description' content='Local Authorities are confronted with the responsibility of developing proposals for the management of cats, largely due to pressures placed upon them by the conservation movement, including Predator Free NZ' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Articles" />
        <meta property="og:description" content="Local Authorities are confronted with the responsibility of developing proposals for the management of cats, largely due to pressures placed upon them by the conservation movement, including Predator Free NZ" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Articles" />
        <meta property="twitter:description" content="Local Authorities are confronted with the responsibility of developing proposals for the management of cats, largely due to pressures placed upon them by the conservation movement, including Predator Free NZ" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>
      
      <div className='page-container single-article-page'>
          <button className='back-btn' onClick={() => navigate(-1)}><MdArrowBackIosNew/>Go Back</button>
          <div className='post-container'>
            <h4 className='title'>{article.title.rendered}</h4>
            <img src={getFeaturedImage(article)} alt={article.slug} />
            <div className='contents' dangerouslySetInnerHTML={{__html: article.content.rendered}}/>
          </div>
      </div>
    </>
  )
}

export default SingleArticle
