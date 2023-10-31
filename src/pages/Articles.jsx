import {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import { useImage } from '../hooks/useImageContext'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Articles = () => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(true)
    const getFeaturedImage = useImage()

    const endPoint = `${baseUrl}/articles?_embed`

    useEffect(() => {
        axios.get(`${endPoint}`)
        .then((res) => {
            setArticles(res.data)
            const timeout = setTimeout(() => setLoading(false), 500);
        })
        .catch((err) => console.log(err))
    },[])

    if (loading) {
        return (<Loading/>)
      }

    const Posts = ({posts}) => {

        const mappedPosts = posts.map((post, index) => {
            const postDate = new Date(post.date)
            const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
            const options = { timeZone: 'UTC', ...dateFormat }
            const formattedDate = postDate.toLocaleDateString('en-US', options);
    
            return (
                <div key={post.slug + "-" + index} className='article-container'>
                    <img src={getFeaturedImage(post)} alt={post.slug} />
                    <a href={`#/articles/${post.id}`}>
                    <div className='article-text'>
                        <h4 className='title'>{post.slug}</h4>
                        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className='excerpt'/>
                        <div className='date'>{formattedDate}</div>
                    </div>
                    </a>
                </div>
            )
        })

        return (
            <>{mappedPosts}</>
        )
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

      <div className='article-page page-container'>
        <h3>Articles</h3>
        <div className='article-contents'>
          <Posts posts={articles}/>
        </div>
      </div>
    </>
  )
}

export default Articles
