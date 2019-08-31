import React from 'react'
import logo from '../../assets/img/logo.png'
import slide1 from '../../assets/img/slider/slide1.jpg'
import slide2 from '../../assets/img/slider/slide2.jpg'
import slide3 from '../../assets/img/slider/slide3.jpg'
export default function Header() {
    return (
        <>
            <header id="header-wrap">
                <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                    <div className="container">
                    
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        </button>
                        <a href="index.html" className="navbar-brand"><img src={logo} alt=""/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header-wrap">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                            About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sponsors">
                            Sponsors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#event-slides">
                            Guidelines
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#schedules">
                            Schedule
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">
                            Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                            FAQ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#google-map-area">
                            Reach Us
                            </a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-map">
                            Contact
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>

                
                    <ul className="mobile-menu">
                    <li>
                        <a className="page-scrool" href="#header-wrap">Home</a>
                    </li>
                    <li>
                        <a className="page-scrool" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#event-slides">Event Guidelines</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#schedules">Schedule</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#faq">FAQ</a>
                    </li> 
                    <li>
                        <a className="page-scroll" href="#google-map-area">Reach Us</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact-map">Contact</a>
                    </li>
                    </ul>
                    

                </nav>
                
                <div id="main-slide" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                    <li data-target="#main-slide" data-slide-to="1"></li>
                    <li data-target="#main-slide" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div className="carousel-caption d-md-block">
                        <p className="fadeInUp wow" data-wow-delay=".6s">PREPARE YOURSELF FOR THE</p>
                        <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Helping you care for your loved one</h1>
                        <a href="form.html" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">ENROLL NOW</a>
                        <a href="problem_statement.html" className="fadeInRight wow custom-btn-border btn btn-border btn-lg" data-wow-delay=".6s">PROBLEM LIST</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="Second slide"/>
                        <div className="carousel-caption d-md-block">
                        <p className="fadeInUp wow" data-wow-delay=".6s">GET YOUR CODING SKILL ENHANCED</p>
                        <h1 className="wow bounceIn heading" data-wow-delay=".7s">the convenient technology to heal, the mission to care</h1>
                        <a href="form.html" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">ENROLL NOW</a>
                        <a href="problem_statement.html" className="fadeInRight custom-btn-border wow btn btn-border btn-lg" data-wow-delay=".6s">PROBLEM LIST</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="Third slide"/>
                        <div className="carousel-caption d-md-block">
                        <p className="fadeInUp wow" data-wow-delay=".6s">CODE AND EARN CASH PRIZE</p>
                        <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Just not a better healthcare, but a convenient healthcare</h1>
                        <a href="form.html" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">ENROLL NOW</a>
                        <a href="problem_statement.html" className="fadeInRight wow btn custom-btn-border btn-border btn-lg" data-wow-delay=".6s">PROBLEM LIST</a>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>

                </header>
        </>
    )
}
