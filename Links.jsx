import { Routes, Route } from "react-router-dom"

// import pages
import Home from "./src/pages/Home"
import Aboutus from "./src/pages/Aboutus"
import Articles from "./src/pages/Articles"
import Membership from "./src/pages/Membership"
import Donations from "./src/pages/Donations"
import Contactus from "./src/pages/Contactus"
import Adoptions from "./src/pages/Adoptions"

// import components
import SingleArticle from "./src/components/SingleArticle"
import SingleDonation from "./src/components/SingleDonation"
import SingleAdoption from "./src/components/SingleAdoption"
import Locations from "./src/components/Locations"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/membership' element={<Membership/>}/>
        <Route path='/donations' element={<Donations/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/adoptions' element={<Adoptions/>}/>
        <Route path='/articles/:id' element={<SingleArticle/>}/>
        <Route path='/donations/:id' element={<SingleDonation/>}/>
        <Route path='/adoptions/:id' element={<SingleAdoption/>}/>
        <Route path='/locations/:id' element={<Locations/>}/>
    </Routes>
  )
}

export default Links
