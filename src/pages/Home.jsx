import { useEffect } from "react"
import useCustomiser from "../hooks/useCustomiser"
import { Helmet } from "react-helmet"

const Home = () => {
  const {btnColor, subBtnColor ,homeSectionColor} = useCustomiser()

  useEffect(() => {
    const mainButtons = document.querySelectorAll(".button")
    const subButton = document.querySelector(".button-light")
    const coloredSection = document.querySelectorAll(".home-colored-section")

    mainButtons.forEach(button => {
      button.style.backgroundColor = `${btnColor}`
    })

    coloredSection.forEach(section => {
      section.style.backgroundColor = `${homeSectionColor}`
    })

    subButton.style.backgroundColor = `${subBtnColor}`

   
  }, [btnColor, subBtnColor,homeSectionColor])

  
  return (
    <>
      <Helmet>
        <title>Community Cat Coalition - Home</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Home page' />
        <meta name='description' content='We support community cats by doing rescuing, de-sexing and find suitable homes' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Home page" />
        <meta property="og:description" content="We support community cats by doing rescuing, de-sexing and find suitable homes" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Home page" />
        <meta property="twitter:description" content="We support community cats by doing rescuing, de-sexing and find suitable homes" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div id='home-page'>
  
        <div className='hero home-section'>
          <h1 className="title">Community Cat Coalition</h1>
          <p>The humane solution for Auckland’s community cats</p>
          <button className="button">DONATION</button>
        </div>

        <div className='about home-section'>
          <div className='aboutccc'>
            <h3>ABOUT CCC</h3>
            <p>
              We are passionate about helping stray/community cats , willing to go the extra mile to improve the lives of all the cats and kittens we can. 
            </p>
          </div>
          <div className='core-activities home-colored-section'>
            <div className='activity'>
              <span>
                <img src='/returning.png' alt='returning'/>
                <h5>Returning</h5>
              </span>
              <p>We help primarily by trapping, neutering and returning cats to their community where they were trapped.</p>
            </div>
            <div className='activity'>
              <span>
                <img src='/rescue.png' alt='rescue'/>
                <h5>Rescue</h5>
              </span>
              <p>We rescue and rehabilitate sick, injured, stray and abandoned cats and kittens in Auckland.</p>
            </div>
            <div className='activity'>
              <span>
                <img src='/rehome.png' alt='rehome'/>
                <h5>Rehome</h5>
              </span>
              <p>We tame and rehome when this is possible.</p>
            </div>
            <div className='activity'>
              <span>
                <img src='../raise.png' alt='raise'/>
                <h5>Raise</h5>
              </span>
              <p>We raise awareness around the importance of de-sexing both pet and community cats.</p>
            </div>
          </div>
        </div>

        <div className='adopt home-section'>
          <img src='/adapt-cat.jpeg' alt='adopt-cat'/>
          <div className='adopt-text-contents home-colored-section'>
            <p>NEEDING A HOME </p>
            <h3>ADOPT A CAT</h3>
            <p>
              Our members have various screening processes to ensure that suitable homes are found for the cats and kittens in their care. This usually includes an adoption fee, a contract and a life time agreement that the cat will be returned should circumstances change. All the cats and kittens adopted out by CCC members are desexed and microchipped.
            </p>
            <button className="button">ADAOPTION</button>
          </div>
        </div>

        <div className='eartip home-section'>
          <div className='eartip-image-contents'>
            <h3>Why do we Ear Tip?</h3>
            <p>These cats have been “ear-tipped” or “notched.”</p>
            <img src='/Ear-tipped.jpg' alt='eartip'/>
          </div>
          <div className='eartip-text-contents'>
            <p>
              All TNR’d cats are ear-tipped before being returned to their communities. This is a surgical alteration showing you that free-living cat has been spayed/neutered. Its part of “TNR” which means “Trap,” “Spay/neutered,” “Return”.
            </p>
            <p>
              The ear-tip is an internationally recognised sign that this cat has been de-sexed, and should not be re-trapped or brought to a shelter unless sick or injured
            </p>
            <p>
              Studies have shown by just being there, they prevent other cats from moving into the area. And, because they have been de-sexed they will never have litters of kittens.
            </p>
          </div>
        </div>

        <div className='donation home-section'>
          <div className='donation-text-contents'>
            <h3>DONATIONS</h3>
            <p>
              Just like any charitable operation the Community Cat Coalition is totally dependent on donations it receives to allow it to undertake the care and support of stray cats in the Auckland region.
            </p>
            <div className='button-container'>
              <button className="donate-now button">DONATE NOW</button>
              <button className="give-a-little button-light">GIVE A LITTLE</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
