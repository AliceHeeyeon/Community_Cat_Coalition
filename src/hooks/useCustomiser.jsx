import { useState, useEffect } from 'react'
import axios from 'axios'

const useCustomiser = () => {
    const [btnColor, setBtnColor] = useState('')
    const [subBtnColor, setSubBtnColor] = useState('')
    const [homeSectionColor, setHomeSectionColor] = useState('')
    const [font, setFont] = useState('')
    
    const baseUrl = import.meta.env.VITE_WP_BASEURL

    useEffect(() => {
        axios.get(`${baseUrl}wp-json/custom-theme/v1/customizer-settings`)
        .then((res) => {
            const {buttonColor, subButtonColor ,sectionColor, fontFamily} = res.data
            setBtnColor(buttonColor)
            setSubBtnColor(subButtonColor)
            setHomeSectionColor(sectionColor)
            setFont(fontFamily)
        })
        .catch((err) => console.error('Error fetching customizer setting:',err))
    }, [baseUrl])

  return (
    {btnColor, subBtnColor ,homeSectionColor, font}
  )
}

export default useCustomiser
