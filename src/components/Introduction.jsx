

import React from 'react'

const Introduction = () => {
  return (
    <div className='intro'>
      <div className="container d-flex flex-column flex-md-row">
        <div className="intro-left-side col-12 col-md-6 mb-4 mb-md-0">
          <h1 className='mb-3'>Hydrated skin in 3 easy steps</h1>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra ornare.</p>
          <form className="d-flex flex-column flex-sm-row gap-2 mb-4" role="search">
            <button className="btn-second btn-outline text-white mb-2 mb-sm-0" type="submit">Shop now</button>
            <button className="btn-first btn-outline" type="submit">Our story</button>
          </form>
          <p className="mb-4 text-center text-md-left">Trusted by the world's best companies</p>
          <div className="d-flex justify-content-center justify-content-md-start flex-wrap">
            <img className='p-3' src="assets/images/logos/logo1.svg" alt="Logo 1" />
            <img className='p-3' src="assets/images/logos/logo2.svg" alt="Logo 2" />
            <img className='p-3' src="assets/images/logos/logo3.svg" alt="Logo 3" />
          </div>
        </div>
        <div className="intro-right-side col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src="assets/images/man.svg" alt="Man" className="img-fluid" />
        </div>
      </div>
      <div className='karusel p-5 d-flex flex-wrap justify-content-center'>
        <button className="m-2">Healthy supplement</button>
        <button className="m-2">Gluten-free</button>
        <button className="m-2">Natural products</button>
        <button className="m-2">Free shipping</button>
        <button className="m-2">Eco-friendly</button>
        <button className="m-2">Vitamins</button>
      </div>
    </div>
  )
}

export default Introduction
