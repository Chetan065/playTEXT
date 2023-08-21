import React from 'react'
import p from './p.jpg'
import t from './t.png'
import r from './r.jpg'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={p} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-dark'>Transform Uppercase to Lowercase</h5>
        <p className='text-dark'> Instantly convert your text from uppercase to lowercase. Perfect for consistent formatting.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={t} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Copy Text with Ease</h5>
        <p>Copy your text selection to the clipboard effortlessly. Share, paste, or save it anywhere you need.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={r} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-dark'>Count Words on the Fly</h5>
        <p className='text-dark'>Get an accurate word count for your text in seconds. Ideal for essays, articles, and more.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='d-flex justify-content-center my-3'>
<Link to="/home" >
<button type="button" class="btn btn-primary btn-lg">Let's Play</button>
</Link>
</div>

    </>
  )
}
