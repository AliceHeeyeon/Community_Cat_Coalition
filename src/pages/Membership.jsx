import axios from 'axios'
import {useState, useEffect} from 'react'
import useCustomiser from '../hooks/useCustomiser'
import { Helmet } from 'react-helmet'

const membership_FormEndpoint = import.meta.env.VITE_APP_WP_API_MEMBERSHIP_FORM_ENDPOINT
const volunteer_FormEndpoint = import.meta.env.VITE_APP_WP_API_VOLUNTEER_FORM_ENDPOINT

const MembershipForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [year, setYear] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [currentActivity, setCurrentActivity] = useState("")
  const [proposedActiviy, setProposedActivity] = useState("")
  const [information, setinformation] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      const membershipForm = new FormData()
            membershipForm.append('year-commencing', year)
            membershipForm.append('your-name', name)
            membershipForm.append('home-address', address)
            membershipForm.append('your-phone', phone)
            membershipForm.append('your-email', email)
            membershipForm.append('current-activity', currentActivity)
            membershipForm.append('proposed-activity', proposedActiviy)
            membershipForm.append('your-info', information)

      axios.post(membership_FormEndpoint, membershipForm, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        console.log(res)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })

      if (submitted) {
        return (
          <>
            <h3>Thank you for your submission!</h3>
            <p>We'll be in touch soon</p>
          </>
        )
      }

      if (error) {
        return (
          <>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your request</p>
          </>
        )
      }
  }

  return (
    <>
    {/* Membership */}
      <form
        onSubmit = {handleSubmit}
        method='POST'
      >
        {/* year input */}
        <div>
            <label htmlFor='year'>Year Commencing</label>
            <input
                id='year'
                type='text'
                name='year'
                onChange={(e) => setYear(e.target.value)}
                value={year}
                required
            />
        </div>
     
        {/* Name input */}
        <div>
            <label htmlFor='membership-name'>Name</label>
            <input
                id='membership-name'
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
        </div>

        {/* address input */}
        <div>
            <label htmlFor='homeAdd'>Home Address</label>
            <input
                id='homeAdd'
                type='text'
                name='address'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
            />
        </div>

        {/* Phone input */}
        <div>
            <label htmlFor='contactNo'>Phone</label>
            <input
                id='contactNo'
                type='number'
                name='phone'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
            />
        </div>

        {/* Email input */}
        <div>
            <label htmlFor='mail'>Email</label>
            <input
                id='mail'
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
        </div>

        {/* current activity input */}
        <div>
            <label htmlFor='current-activity'>Current Activities</label>
            <input
                id='current-activity'
                type='text'
                name='current-activity'
                onChange={(e) => setCurrentActivity(e.target.value)}
                value={currentActivity}
                required
            />
        </div>

        {/* proposed activity input */}
        <div>
            <label htmlFor='proposed-activity'>Proposed Activities</label>
            <input
                id='proposed-activity'
                type='text'
                name='proposed-activity'
                onChange={(e) => setProposedActivity(e.target.value)}
                value={proposedActiviy}
                required
            />
        </div>

        {/* information input */}
        <div className='message-container'>
            <label htmlFor='other-message'>Any other relevant information ?</label>
            <textarea
                id='other-message'
                className='message'
                name='information'
                onChange={(e) => setinformation(e.target.value)}
                value={information}
                required
            />
        </div>

        <div>
            <button
                className='regular-button button'
                type='submit'
            >
                Join Membership
            </button>
        </div>
      </form>
    </>
  )
}

const VolunteerForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [area, setArea] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      const volunteerForm = new FormData()
            volunteerForm.append('your-name', name)
            volunteerForm.append('your-email', email)
            volunteerForm.append('your-phone', phone)
            volunteerForm.append('your-area', area)
            volunteerForm.append('your-message', message)

      axios.post(volunteer_FormEndpoint, volunteerForm, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        console.log(res)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })

      if (submitted) {
        return (
          <>
            <h3>Thank you for your submission!</h3>
            <p>We'll be in touch soon</p>
          </>
        )
      }

      if (error) {
        return (
          <>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your request</p>
          </>
        )
      }
  }

  return (
    <>
    {/* Volunteer */}
      <form
        onSubmit = {handleSubmit}
        method='POST'
      >
        {/* Name input */}
        <div>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
        </div>

        {/* Email input */}
        <div>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
        </div>

        {/* Phone input */}
        <div>
            <label htmlFor='phone'>Phone</label>
            <input
                id='phone'
                type='number'
                name='phone'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
            />
        </div>

        {/* Area input */}
        <div>
            <label htmlFor='area'>Area</label>
            <input
                id='area'
                type='text'
                name='area'
                onChange={(e) => setArea(e.target.value)}
                value={area}
                required
            />
        </div>

        {/* Message input */}
        <div className='message-container'>
            <label htmlFor='message'>How would you like to help?</label>
            <textarea
                id='message'
                className='message'
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
            />
        </div>

        <div>
            <button
                className='regular-button button'
                type='submit'
            >
                Join Volunteer
            </button>
        </div>
      </form>
    </>
  )
}

const Membership = () => {
  const {btnColor} = useCustomiser()

  useEffect(() => {
    const mainButtons = document.querySelectorAll(".button")

    mainButtons.forEach(button => {
      button.style.backgroundColor = `${btnColor}`
    })
   
  }, [btnColor])

  return (
    <>
       <Helmet>
        <title>Community Cat Coalition - Membership and Volunteer</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Membership and Volunteer' />
        <meta name='description' content='Join our membership or be a volunteer' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Membership and Volunteer" />
        <meta property="og:description" content="Join our membership or be a volunteer" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Membership and Volunteer" />
        <meta property="twitter:description" content="Join our membership or be a volunteer" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div className='form-page'>
        <div className='page-container'>
        <div id='membership'>
            <h2>Membership</h2>
            <MembershipForm />
          </div>
          <div id='volunteer'>
            <h2>Join us as a Volunteer</h2>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Membership
