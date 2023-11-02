import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useImage } from '../hooks/useImageContext'
import { MdArrowBackIosNew } from 'react-icons/md'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const AllCatsIntheLocation = ({setLocation}) => {
    const {id} = useParams()
    const getFeaturedImage = useImage()
    const [cats, setCats] = useState([])
    const [loading, setLoading] = useState(true)
    
    const endPoint = `${baseUrl}/adoptions?location=${id}&_embed`

    useEffect(() => {
        axios.get(endPoint)
        .then((res) => {
            setCats(res.data)
            setLoading(false)
            switch (Number(id)) {
                case 16:
                    setLocation("New Lynn");
                    break;
                case 17:
                    setLocation("Glen Eden");
                    break;
                case 18:
                    setLocation("Murrays Bay");
                    break;
                case 19:
                    setLocation("Onehunga");
                    break;
                case 20:
                    setLocation("Avondale");
                    break;
            }
        })
        .catch((err) => console.log(err))
    },[endPoint, id])

    const renderedCats = cats.map((cat, index) => {
        return (
            <div key={index} id='cats' className='cats'>
                <a href={`#/adoptions/${cat.id}`}>
                    <img src={getFeaturedImage(cat)} alt={cat.slug} />
                    <h4 className='name'>{cat.title.rendered}</h4>
                </a>
            </div>
        )
    })

    return (
        <>
            {renderedCats}
        </>
    )
}

const GetLocationData = ({location}) => {
    return (
        <h3>{location}</h3>
    )
}

const Locations = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState(null)
    
  return (
    <div className='page-container'>
        <button onClick={() => navigate(-1)} className='back-btn'><MdArrowBackIosNew/>Go Back</button>
        <div className='taxonomy'>
            <GetLocationData location={location}/>
            <div className='cats-container'>
                <AllCatsIntheLocation setLocation={setLocation}/>
            </div>
        </div>
    </div>
  )
}

export default Locations
