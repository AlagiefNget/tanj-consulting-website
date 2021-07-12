const Main = () => {
    return (
        <main id="main">

            {/* Why us section */}
            <section id="why-us" className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                            <div className="content">
                            <h3>Why Choose Tanj Consulting?</h3>
                            <p>
                                With over 6 years of experience in business consulting, our structure has developed work techniques adapting to each country, our company 
                                actively participates in the development of African genius and has a good reputation 
                                in the quality of its products developed by highly qualified staff.
                            </p>
                            <div className="text-center">
                                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 d-flex">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-receipt"></i>
                                        <h4>Representation</h4>
                                        <p>We Represent domestic and foreign firms and help making business easier for them.</p>
                                    </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Creating Opportunities</h4>
                                        <p>Create Market and International Opportunities for our clients and partners.</p>
                                    </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-images"></i>
                                        <h4>Consultancy</h4>
                                        <p>Schedules, advice and organization of events, trade missions, fairs etc...</p>
                                    </div>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>  
                </div>
            </section>

            {/* About us section */}
            <section id="about" className="about section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right">
                            <img src="assets/img/tanjPortfolio_fisj_1.jpg" className="img-fluid" alt="" />
                            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h4 data-aos="fade-up">About us</h4>
                            <p data-aos="fade-up">
                                Tanj CONSULTING works for prospecting business opportunities in international trade by acting with excellence, reliability and quality technical support with ultra modern.
                                It also works on research and service to the client, quickly and efficiently, as required by the globalization of international trade.
                                Tanj Consulting provides consulting, internal and external consultation, representation, research, feasibility study, development and implementation of activities aimed at promoting the role of partners in national and international exchanges .
                            </p>
                            {/* <div className="icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-gift"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div> */}
                            {/* <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-atom"></i></div>
                                <h4 className="title"><a href="">Dine Pad</a></h4>
                                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cleints/Partners section */}
            <section id="partners" className="clients">
                <div className="section-title">
                    <h2 data-aos="fade-up">Our Partners</h2>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="clients-slider swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide" title="SOY Natura"><img src="assets/img/tanjPart_1.jpg" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide" title="ESEOESE Publicidad - Advertising agencies in Malaga"><img src="assets/img/tanjPart_2.jpg" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide" title="SUNUGAL FISH SL, import & export fish from Africa to Worldwide"><img src="assets/img/tanjPart_3.jpg" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide" title="Estudios Produsom"><img src="assets/img/tanjPart_4.jpg" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide" title="Dakar Conexion"><img src="assets/img/tanjPart_5.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>
                            With over 6 years of experience in business consulting, we have a lot to offer to our clients. Here are some reasons why companies worldwide choose us.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-briefcase"></i></div>
                                <h4 className="title"><a href="">Fish Import & Export</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href="">Clothing & Jewelries</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                <h4 className="title"><a href="">Cosmetics</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-binoculars"></i></div>
                                <h4 className="title"><a href="">Art & Music</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                <h4 className="title"><a href="">Construction</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                <h4 className="title"><a href="">Furniture</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                <a href="">more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio section */}
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">Portfolio</h2>
                        {/* <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            {/* <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /> */}
                            <img src="assets/img/tanjPortfolio_construction.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Construction</h4>
                                <p>For all you constructions</p>
                                {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
                                <a href="assets/img/tanjPortfolio_construction.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team section */}
            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">Team</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Ibrahima Tanj</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Kumba Diouf</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Chiekh Fallou Gueye</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Ngoneh Njie</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact us section */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">Contact</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                            <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                {/* <p>A108 Adam Street, New York, NY 535022</p> */}
                                <p>
                                    47 Kairaba Avenue <br />
                                    Fajara, K.S.M.D <br />
                                    Serrekunda, The Gambia <br/><br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>tanjconsult@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+220 7448523<br />+220 9852147</p>
                            </div>
                        </div>
                        </div>

                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="col-xl-9 col-lg-12 mt-4">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
