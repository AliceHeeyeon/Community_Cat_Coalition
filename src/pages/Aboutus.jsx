import React from 'react'
import { Helmet } from 'react-helmet'

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>Community Cat Coalition - About</title>
        {/* Primary Meta tags */}
        <meta name='title' content='Community Cat Coalition - About page' />
        <meta name='description' content='we believes that the management or treatment of any species should be based on Respect, Kindness, Fairness, Professionalism' />
        <meta name='keywords' content='cats, kittens, adoption, rescue, rehome, returning, donations' />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Community Cat Coalition - About page" />
        <meta property="og:description" content="we believes that the management or treatment of any species should be based on Respect, Kindness, Fairness, Professionalism" />
        <meta property="og:image" content="/ccc-logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Community Cat Coalition - About page" />
        <meta property="twitter:description" content="we believes that the management or treatment of any species should be based on Respect, Kindness, Fairness, Professionalism" />
        <meta property="twitter:image" content="/ccc-logo.png" />
      </Helmet>

      <div className='about-page page-container'>
        <h3>Who are we?</h3>
        <p>The Cat Coalition Inc. was established in 2009, as an initiative of the SPCA Auckland to support   members of the community who were attending to the needs of stray cats in the Auckland region.

          At that time these dedicated volunteers were caring for large numbers of stray cats at their own expense without financial or moral support, and the purpose of the coalition was to create a network of cat carers who collectively would be supported by the SPCA in their humanitarian work.

          In 2015 the Cat Coalition Inc. became a fully independent Incorporated Society, the Community Cat Coalition Inc (CCC), named to reflect the services provided to the community through the humane management of stray cats by the collective, and mechanisms in place to involve the community in its ongoing work.

          The CCC is an umbrella organisation which helps the community cats of Auckland by supporting the people who care for them, primarily by de-sexing. Our primary focus is Trap-Neuter-Return, or TNR. TNR aims to prevent the births of unmanageable numbers of kittens, and in this way it enables unsocialised community cats to live lives of reasonable quality at the same time as it humanely and sustainably reduces, over time, the numbers of stray cats across the city.</p>

          <h3 className='core-value'>Community Cat Coalition’s Core Values</h3>
          <h4>Respect, Kindness, Fairness, Professionalism</h4>
          <p>CCC believes that the management or treatment of any species should be based on these principles.</p>
          <h4>Evidence-based</h4>
          <p>CCC believes that all its decisions and actions should be defensible on the basis of sound ecological, veterinary, animal wellbeing, and best-practice operational evidence and understandings. </p>
          <h4>Collaboration</h4>
          <p>CCC believes that effective and sustainable humane cat management is optimised when a high level of collaboration and mutual support can be established and maintained between stakeholders.</p>
      </div>
    </>
  )
}

export default Aboutus
