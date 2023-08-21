import React,{useState} from 'react'
import x from './x.png'
import lin from './lin.png'
import gitt from './gitt.png'
import i from './i.png'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-md bg-${props.mode} navbar-${props.mode} sticky-top`}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="/"><img src={x} alt="" className='mx-2' />{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.item1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.item2}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.item3}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://github.com/Chetan065" target='_blank'><img src={gitt} height={30} width={30} className='mx-2' />{props.dd1}</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/chaitan-agarwal-016bba253" target='_blank'><img src={lin} height={30} width={30} className='mx-2' />{props.dd2}</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={i} alt="" height={30} width={30} />
              </a>
              <ul className="dropdown-menu">
                <li><button type="button" className="btn btn-outline-info mx-2" onClick={props.usemode2}>Light Mode</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button type="button" className="btn btn-outline-dark mx-2" onClick={props.usemode1}>Dark Mode</button></li>
              </ul>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={`text-${props.mode === "dark" ? "white" : "dark"} mx-lg-1 container justify-content-end align-items-center`}>
          <h6 className='mx-lg-1 text-center col-lg-2 col-sm-3 mx-xs-3'>Custom Themes</h6> 
        <button type="button" className="btn btn-success rounded-cicle mx-1 col-md-0" onClick={props.green}></button>
        <button type="button" className="btn btn-danger rounded-cicle mx-1 col-md-0" onClick={props.redd}></button>
        <button type="button" className="btn btn-warning rounded-cicle mx-1 col-md-0" onClick={props.yell}></button>
        </div>
    </nav> 
  )
}
Navbar.defaultProps = {
  title: 'playTEXT',
  item1: "Home",
  item2: "UseCase",
  item3: "Social Media",
  dd1: "GitHub",
  dd2: "LinkedIn",
}
