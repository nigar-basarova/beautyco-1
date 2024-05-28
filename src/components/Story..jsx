
import React from 'react'

const Story = () => {
  return (
    <div>
      <div className="container p-5 mt-5">
        <div className="story d-flex justify-content-center align-items-center mb-4">
          <button>About us</button>
        </div>
        <h1 className='d-flex justify-content-center py-5 text-center'>The beautiful story</h1>
        <p className='text-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

        <div className="our-story d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
          <button className='mb-2 mb-md-0'>Our story</button>
          <button className='ourstory'>Contact us <img className='p-1' src="assets/icons/arrow.svg" alt="Arrow" /></button>
        </div>
        <div className="best-sellers d-flex justify-content-center mt-4">
          <button className='best-sellers'>Best sellers</button>
        </div>
        <div className='trusted-products mt-5'>
          <h4 className='text-center'>The most trusted products by our customers</h4>
        </div>
      </div>
    </div>
  )
}

export default Story
