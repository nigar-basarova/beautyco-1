import React, {useRef} from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
//obyektin parcalanmasi

const Navbar = () => {
const purpleMenyu= useRef()
  const menyunuAc = ()=>{
purpleMenyu.current.classList.add("aktiv")
  }
  const menyunuBagla = ()=>{
    purpleMenyu.current.classList.remove("aktiv")
      }
  return (

<>
    <div className="mobile-menu  position-fixed " ref={purpleMenyu}  >
    <RxCross2 className='text-white  baglama-iconu'  onClick={menyunuBagla} />
<nav className="mobile-links   ">
  <a href="">Products</a>
  <a href="">Story</a>
  <a href="">Blog</a>
 <a href="">Collections</a>
 <a href="">Contact</a>
</nav>
    </div>

    <nav className="navbar navbar-expand-lg  mt-2 ">
      <div className="container ">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button onClick={menyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse classes" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"  to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/story">Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item dropdown">
              <link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collections
              </link>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">C</a>
            </li> */}
          </ul>
          <form className="d-flex gap-2" role="search">
            <button className="btn-first btn-outline " type="submit"> 
              <img className='p-1' src="/assets/icons/shop.svg" alt="" />Cart
            </button>
            <button className="btn-second btn-outline text-white " type="submit"> Subscribe</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
