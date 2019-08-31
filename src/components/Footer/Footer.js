import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
               <footer class="footer-area section-padding">
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                        <h3><img src="assets/img/logo.png" alt=""/></h3>
                        
                        <p>
                        Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt.
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                        <h3>QUICK LINKS</h3>
                        <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#event-slides">Rules & Registration</a></li>
                        <li><a href="#schedules">Event Shedule</a></li>
                        <li><a href="#gallery">Photo Gallery</a></li>
                        <li><a href="#faq">Questions</a></li>
                        <li><a href="#contact-map">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                        <h3>RECENT POSTS</h3>
                        <p>Hackathons help IT companies to find talented Programmers, Software Developers, Designers etc. It also helps the participants to launch successful startups if their products or solutions have business value. So take up the Challenge and Code your way to the top!</p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                       
                        <h3>SUBSCRIBE US</h3>
                        <div class="widget">
                        <div class="newsletter-wrapper">
                            <form method="post" id="subscribe-form" name="subscribe-form" class="validate">
                            <div class="form-group is-empty">
                                <input type="email" value="" name="Email" class="form-control" id="EMAIL" placeholder="Your email" required=""/>
                                <button type="submit" name="subscribe" id="subscribes" class="btn btn-common sub-btn"><i class="lni-pointer"></i></button>
                                <div class="clearfix"></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    
                    
                        <h3>FOLLOW US ON</h3>
                        <div class="widget">
                        <ul class="footer-social">
                            <li><a class="facebook" href="https://www.facebook.com/VCET-Hackathon-504784249879705" target="_blank"><i class="lni-facebook-filled"></i></a></li>
                            <li><a class="twitter" href="https://twitter.com/login?lang=en" target="_blank"><i class="lni-twitter-filled"></i></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/vcet-hackathon-038b3316b/" target="_blank"><i class="lni-linkedin-filled"></i></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/hackathon_vcet/" target="_blank"><i class="lni-instagram-filled"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>

                <div id="copyright">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="site-info">
                        <p>Copyright © 2019 All Rights Reserved By <a href="https://www.vcet.edu.in/" target="_blank">Vidyavardhini's College Of Engineering & Technology</a></p>
                        </div>      
                    </div>
                    </div>
                </div>
            </div> 
            <a href="#" class="back-to-top">
                <i class="lni-chevron-up"></i>
            </a>

            <div id="preloader">
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
            </div>

            </>
        )
    }
}
