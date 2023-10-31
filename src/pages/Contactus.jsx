import axios from 'axios'
import {useState, useEffect} from 'react'
import useCustomiser from '../hooks/useCustomiser'
import { Helmet } from 'react-helmet'

const formEndpoint = import.meta.env.VITE_APP_WP_API_CONTACT_FORM_ENDPOINT

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      const contactForm = new FormData()
            contactForm.append('your-name', name)
            contactForm.append('your-email', email)
            contactForm.append('your-message', message)

      axios.post(formEndpoint, contactForm, {
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
            <h3>Thank you for your message!</h3>
            <p>We'll be in touch soon</p>
          </>
        )
      }

      if (error) {
        return (
          <>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your message</p>
          </>
        )
      }
  }

  return (
    <div className='form-page'>
      <form
        onSubmit = {handleSubmit}
        method='POST'
      >
        {/* Name input */}
        <div>
            <label htmlFor='contact-name'>Name</label>
            <input
                id='contact-name'
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
        </div>

        {/* Email input */}
        <div>
            <label htmlFor='contact-email'>Email</label>
            <input
                id='contact-email'
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
        </div>

        {/* Message input */}
        <div className='message-container'>
            <label htmlFor='contact-message'>Message</label>
            <textarea
                id='contact-message'
                className='message'
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
            />
        </div>

        <div className='button-container'>
            <button
                className='regular-button button'
                type='submit'
            >
                Send Message
            </button>
        </div>
      </form>
    </div>
  )
}

const Contactus = () => {
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
        <title>Community Cat Coalition - Contact us</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - Contact us' />
        <meta name='description' content='Contact us if you have any query' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - Contact us" />
        <meta property="og:description" content="Contact us if you have any query" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - Contact us" />
        <meta property="twitter:description" content="Contact us if you have any query" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div className='page-container form-page'>
        <div>
        <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contactus
