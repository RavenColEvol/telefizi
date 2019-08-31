import React from 'react'

export default function Main() {
    return (
        <>
    <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h2 className="wow fadeInDown" data-wow-delay="0.2s">Event Will Start In</h2>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <div id="clock" className="time-count"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    

     
    <section id="services" className="services section-padding">
      <div className="container">
        
        <div className="row services-wrapper">
          
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
              <div className="icon">
                <i className="lni-calendar"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">DATE</a></h3>
                <p>5-6th October, 2019</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-map-marker"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">LOCATION</a></h3>
                <p>Vasai (West)</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-hourglass"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">DURATION</a></h3>
                <p>30 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    

    
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">About VCET HACKATHON</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">VCET Hackathon is a 30 hours Hackathon organized by Department of Information Technology of "Vidyavardhini's College of Engineering and Technology". 
                By organizing this Hackathon, we are trying to promote a strong Programming and Product Building Culture among students that will help them develop Problem Solving, Critical Thinking and Software Development Skills. 
                It is an experience to take on challenging problems we are surrounded by all the time and crack them down. 
                Will you get time to eat? Can you ditch your sleep? Do you have passion to build? 
                Find out in this 30 hours long thrilling experience!</p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    

    
    <section className="counter-section section-padding">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.3s">
              <div className="icon"><i className="lni-world"></i></div>
              <p>WiFi</p>
              <span>The Speed you need to reach your limits.</span>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon"><i className="lni-code"></i></div>
              <p>FACILITIES</p>
              <span>Proper environment for coding competition.</span>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.9s">
              <div className="icon"><i className="lni-gift"></i></div>
              <p>Merchandise</p>       
              <span>For extra motivation.We all love gifts, don't we?</span>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon"><i className="lni-dinner"></i></div>
              <p>Food</p>
              <span>br/eakfast, Lunch and Dinner along with Snacks.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="sponsors" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsors</h1>
              
            </div>
          </div>
        </div>
        <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-01.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-02.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-03.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-04.png" alt=""/></a>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    

    
    <section id="event-slides" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Event Guideline</h1>
              
            </div>
          </div>

          <div className="col-12 wow fadeInRight" data-wow-delay="0.3s">
            <h2 className="intro-title">RULES</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> The VCET Hackathon will take place on 5th October, 2019</li>
              <li><i className="lni-check-mark-circle"></i> A team can consist of 1 to 4 members. Every member of the team must be a student of an university or a college. A team can have members from different colleges.</li>
              <li><i className="lni-check-mark-circle"></i> Entry fees is Rs.500 per member.</li>
              <li><i className="lni-check-mark-circle"></i> Participants are free to use open standard repositories, APIs and publically available libr/aries.</li> 
              <li><i className="lni-check-mark-circle"></i> Participants will have to br/ing their laptops. Participants will not be allowed to take their machines out of the campus during Hackathon.</li>
              <li><i className="lni-check-mark-circle"></i> Participants are allowed to go home only after 30 hours of coding session followed by pitching session. We will provide resting area (separate for male and female participants).</li>
              <li><i className="lni-check-mark-circle"></i> Progress of the projects will be tracked during Hackathon. Use of readymade code or precompiled code will lead to disqualification.</li>
              <li><i className="lni-check-mark-circle"></i> No storage devices such as Pen Drives, Hard Drives etc. are allowed.</li>
              <li><i className="lni-check-mark-circle"></i> Participants are expected to behave professionally and responsibly.</li>
              <li><i className="lni-check-mark-circle"></i> Decisions made by organizers and judges are final.</li>
            </ul>
          </div>
          <div className="col-12">
            <a href="form.html" className="btn btn-common">REGISTER NOW</a>
          </div>
          <div className="col-12 wow fadeInLeft" data-wow-delay="0.3s">
            <br/>
            <br/>
            <h2 className="intro-title">REGISTRATION</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> Select a total of 4 problem statement from the provided problem statements.</li>
              <li><i className="lni-check-mark-circle"></i> The Final Problem statement of your team will be revealed one day prior to the event.</li>
              <li><i className="lni-check-mark-circle"></i> Payment for the selected teams i.e. ₹500 per member should be done by 26 th September 2018 . Payment for all team members should be done by a single transaction.</li>
              <li><i className="lni-check-mark-circle"></i> Further details will be provided in email.</li> 
              <li><i className="lni-check-mark-circle"></i> Following are the methods of payment</li>
            </ul>
          </div>
          <div className="col-12">
            <a href="form.html" className="btn btn-common btn-pay" data-toggle="modal" data-target="#neftModal">NEFT</a>
            <a href="form.html" className="btn btn-common btn-pay" data-toggle="modal" data-target="#upiModal">UPI</a>
            <a href="form.html" className="btn btn-common btn-pay" data-toggle="modal" data-target="#cashModal">CASH</a>
          </div>
        </div>
      </div>
    </section>
    

    
    
    <div className="modal fade" id="neftModal" role="dialog" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog" style={{marginTop: "100px"}}>
            
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor:'#f5f5f5',color:'white'}}>
                    <h4 className="modal-title" style={{color:"#555555"}}>Details for NEFT</h4>
                </div>
                <div className="modal-body" style={{backgroundColor:'#f5f5f5',color:'white'}}>
                    <p style={{color:"#555555"}}>Account Name: VCET<br/>Bank: UNION BANK OF INDIA<br/>br/anch: Vidyavardhini College
                        Road
                        <br/>A/C No: 320602011001031<br/>IFSC: UBIN0562556</p>
                    <p style={{color:"#555555"}}>Payment should be done by single transaction per team. Carry your Transaction
                        ID and Bank Details on the day of Hackathon. </p>
                </div>
                <div className="modal-footer" >
                    <button type="button" className="btn payment-btns btn-primary btn-rounded" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    
    <div className="modal fade" id="cashModal" role="dialog">
        <div className="modal-dialog" style={{marginTop:"100px"}}>
            
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" >Details for Cash</h4>
                </div>
                <div className="modal-body">
                    <p style={{color: "#555555"}}>For cash payment, please contact following co-ordinators.</p>
                    <p style={{color: "#555555"}}>Sanchitsagar Singh : +91 98695 05118</p>
                    <p style={{color: "#555555"}}>Akash Rajpurohit : +91 86980 15453</p>
                    <p style={{color: "#555555"}}>Aditya Manze : +91 81496 38748</p>
                    <p style={{color: "#555555"}}>Mohanish Bharambe : +91 88066 15247</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn payment-btns btn-primary btn-rounded" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    
    <div className="modal fade" id="upiModal" role="dialog">
        <div className="modal-dialog" >
            
            <div className="modal-content">
                <div className="modal-header" >
                    <h4 className="modal-title">Details for UPI</h4>
                </div>
                <div className="modal-body">
                    <p >Account Name: VCET<br/>Bank: UNION BANK OF INDIA<br/>br/anch: Vidyavardhini College
                        Road
                        <br/>A/C No: 320602011001031<br/>IFSC: UBIN0562556</p>
                    <p >Payment should be done by single transaction per team. Carry your Transaction
                        ID and Bank Details on the day of Hackathon. </p>
                </div>
                <div className="modal-footer" >
                    <button type="button" className="btn payment-btns btn-primary btn-rounded" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    

    
    <section id="schedules" className="schedule section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedules</h1>
              
            </div>
          </div>
        </div>
        <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
          <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
            <div className="table-responsive">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-expanded="true">
                    <div className="item-text">
                      <h4>Saturday</h4>
                      <h5>5th October</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="tuesday-tab" data-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday">
                    <div className="item-text">
                      <h4>Sunday</h4>
                      <h5>6th October</h5>
                    </div>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                <div id="accordion">
                  <div className="card">
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt=""/>
                        </div>                     
                        <span className="time">08 AM</span>
                        <h4>Coding Begins</h4>
                        <br/>
                        
                      </div>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Labs
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt=""/>
                        </div>                     
                        <span className="time">09 AM - 10 AM </span>
                        <h4>Inauguration of Hackathon</h4>
                        <h5 className="name">By: Chief Guest</h5>
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Seminar Hall
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                <div id="accordion2">
                  <div className="card">
                    <div id="headingOne1">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt=""/>
                        </div>                     
                        <span className="time">01 PM - 02 PM</span>
                        <h4>Selection for finalist</h4>
                        <h5 className="name">By: Invited Judges.</h5>
                      </div>
                    </div>
                    <div id="collapseOne1" className="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Labs
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo2">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt=""/>
                        </div>                     
                        <span className="time">03 PM - 05 PM</span>
                        <h4>Final pitching of finalists.</h4>
                        <h5 className="name">By: Invited Judges.</h5>
                      </div>
                    </div>
                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Seminar Hall
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                <div id="accordion3">
                  <div className="card">
                    <div id="headingOne3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne3" className="collapse show" aria-labelledby="headingOne3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo3" className="collapse" aria-labelledby="headingTwo3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                <div id="accordion4">
                  <div className="card">
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne4" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo4" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree4">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree4" className="collapse" aria-labelledby="headingThree" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                <div id="accordion">
                  <div className="card">
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt=""/>
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">our event gallery</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div> 
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-1.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-1.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-2.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-2.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-3.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-3.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-4.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-4.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-5.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-5.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-6.jpg" alt=""/>
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-6.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mt-3">
          <div className="col-xs-12">
            <a href="#" className="btn btn-common">br/owse All</a>
          </div>
        </div>
      
      </div>
    </section>
    

    
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Ask Question?</h1>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <div className="header-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="lni-pencil"></i> How to make a new event?
                  </div>
                </div>
                <div id="questionOne" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">
                      <i className="lni-pencil"></i>  Which payment methods do you accept? 
                    </div>
                </div>
                <div id="questionTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                    <i className="lni-pencil"></i>  Which document can i br/ing to meeting?   
                  </div>
                </div>
                <div id="questionThree" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                   <i className="lni-pencil"></i> Who can join at the live event venue?
                  </div>
                </div>
                <div id="questionFour" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne2">
                  <div className="header-title" data-toggle="collapse" data-target="#questionOne2" aria-expanded="true" aria-controls="collapseOne">
                    <i className="lni-pencil"></i> How to make a new event?
                  </div>
                </div>
                <div id="questionOne2" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo2" aria-expanded="false" aria-controls="questionTwo">
                      <i className="lni-pencil"></i>  Which payment methods do you accept? 
                    </div>
                </div>
                <div id="questionTwo2" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                    <i className="lni-pencil"></i>How to set price? 
                  </div>
                </div>
                <div id="questionFive" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionSix" aria-expanded="false" aria-controls="questionSix">
                    <i className="lni-pencil"></i>  What our price list? 
                  </div>
                </div>
                <div id="questionSix" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br/unch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Our Pricing</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
              <div className="icon">
                <i className="lni-write"></i>
              </div>
              <div className="colmun-title">
                <h5>Basic Pass</h5>
              </div>
              <div className="price">
                <h2>$29</h2>
                <p>452 Tickets Available</p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Coffee br/eak</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Lunch on all days</span></li>
                  <li><i className="lni-close"></i><span className="text">Access to all areas</span></li>
                  <li><i className="lni-close"></i><span className="text">Certificate</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Workshop</span></li>
                </ul>
              </div>
              <a href="#" className="btn btn-common">Buy Ticket</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            <div className="price-block-wrapper wow fadeInUp" data-wow-delay="0.3s">
              <div className="icon">
                <i className="lni-layers"></i>
              </div>
              <div className="colmun-title">
                <h5>Standard Pass</h5>
              </div>
              <div className="price">
                <h2>$40</h2>
                <p>452 Tickets Available</p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Coffee br/eak</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Lunch on all days</span></li>
                  <li><i className="lni-close"></i><span className="text">Access to all areas</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li>
                  <li><i className="lni-close"></i><span className="text">Workshop</span></li>
                </ul>
              </div>
              <a href="#" className="btn btn-common">Buy Ticket</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            <div className="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-leaf"></i>
              </div>
              <div className="colmun-title">
                <h5>Premium Pass</h5>
              </div>
              <div className="price">
                <h2>$68</h2>
                <p>452 Tickets Available</p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Coffee br/eak</span></li>
                  <li><i className="lni-close"></i><span className="text">Lunch on all days</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Access to all areas</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li>
                  <li><i className="lni-close"></i><span className="text">Workshop</span></li>
                </ul>
              </div>
              <a href="#" className="btn btn-common">Buy Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    

    
    
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Our Latest News & Articles</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-1.jpg" alt=""/>
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018</span>
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-2.jpg" alt=""/>
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018 </span>
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-3.jpg" alt=""/>
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018</span> 
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <a href="#" className="btn btn-common">Read More News</a>
          </div>
        </div>
      </div>
    </section>
  
    

    
    
    <div id="subscribe" className="section-padding">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 col-lg-7">
            <div className="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
              <h2 className="subscribe-title">REACH US</h2>
              <form className="text-center form-inline">
                <input className="mb-20 form-control" name="email" placeholder="Enter Your Email Here"/>
                <button type="submit" className="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                <span className="ladda-label"><i className="lni-check-box"></i> Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="section-title-header text-center">
                  <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">REACH US</h1>
                  
                </div>
              </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6599913057694!2d72.82654491447336!3d19.383869586912002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini's+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1506536306980" width="100%" height="200" frameborder="0"  allowfullscreen=""></iframe>
        </div>
      </div>
    </section>
    

    
    <section id="contact-map" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">CONTACT US</h1>
              
            </div>  
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <h2 className="contact-title">Lets get in touch!</h2>
            <p>Feel free to contact us</p>
            <div className="widget">
                <ul className="social-list">
                    <li><a className="facebook" href="https://www.facebook.com/VCET-Hackathon-504784249879705" ><i className="lni-facebook-filled"></i></a></li>
                    <li><a className="twitter" href="https://twitter.com/login?lang=en" ><i className="lni-twitter-filled"></i></a></li>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/vcet-hackathon-038b3316b/" ><i className="lni-linkedin-filled"></i></a></li>
                    <li><a className="instagram" href="https://www.instagram.com/hackathon_vcet/" ><i className="lni-instagram-filled"></i></a></li>
                </ul>
                <br/>
                <ul className="contact-info pt50">
                  <li><i className="lni-map-marker"></i>
                    <span>K.T. Marg, Dist-Palghar, Shastri Nagar
                      <br/>
                      Vasai West, Maharashtra - 401202
                    </span></li>
                  <li><i className="lni-phone"></i><span>0250-2338234</span></li>
                  <li><i className="lni-envelope"></i><span><a href="mailto:vcet.hackathon@vcet.edu.in">vcet.hackathon@vcet.edu.in</a></span></li>  
                  <li><i className="lni-world"></i><span><a href="https://www.vcet.edu.in">www.vcet.edu.in</a></span></li>
                </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <h2 className="contact-title">For Technical Queries</h2>
            <ul className="list-specification">
              <div className="contact-content">
                <b>Sanchitsagar Singh</b>
                <p>+91 98695 05118</p>
              </div>
              <div className="contact-content">
                <b>Akash Rajpurohit</b>
                <p>+91 86980 15453</p>
              </div>
              <div className="contact-content">
                <b>Raj Kotadia</b>
                <p>+91 97739 95480</p>
              </div>
              <br/>
              <h2 className="contact-title">For Other Queries</h2>
            </ul>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
