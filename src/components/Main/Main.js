const Main = () => {
    return (
        <main id="main">

            {/* Why us section */}
            <section id="why-us" className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                            <div className="content">
                            {/* <h3>Why Choose Tanj Consulting for your company website?</h3> */}
                            <h3>Why Choose Tanj Consulting?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
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
                                        <h4>Corporis voluptates sit</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Ullamco laboris ladore pan</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-images"></i>
                                        <h4>Labore consequatur</h4>
                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h4 data-aos="fade-up">About us</h4>
                            <h3 data-aos="fade-up">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p data-aos="fade-up">Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                            <div className="icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-gift"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-atom"></i></div>
                                <h4 className="title"><a href="">Dine Pad</a></h4>
                                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client section */}
            <section id="clients" className="clients">
                <div className="container" data-aos="fade-up">
                    <div className="clients-slider swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
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
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-briefcase"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-binoculars"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values section */}
            <section id="values" className="values">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="card" style={{backgroundImage: 'url(assets/img/values-1.jpg)'}}>
                                <div className="card-body">
                                <h5 className="card-title"><a href="">Our Mission</a></h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="card" style={{backgroundImage: 'url(assets/img/values-2.jpg)'}}>
                                <div className="card-body">
                                <h5 className="card-title"><a href="">Our Plan</a></h5>
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card" style={{backgroundImage: 'url(assets/img/values-3.jpg)'}}>
                                <div className="card-body">
                                <h5 className="card-title"><a href="">Our Vision</a></h5>
                                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="card" style={{backgroundImage: 'url(assets/img/values-4.jpg)'}}>
                                <div className="card-body">
                                <h5 className="card-title"><a href="">Our Care</a></h5>
                                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <section id="testimonials" className="testimonials">
                <div className="container position-relative" data-aos="fade-up">
                    <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

            {/* Portfolio section */}
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">Portfolio</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
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
                                        <h4>Walter White</h4>
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
                                        <h4>Sarah Jhonson</h4>
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
                                        <h4>William Anderson</h4>
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
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing section */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">Pricing</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up">
                            <div className="box">
                                <h3>Free</h3>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="box featured">
                                <h3>Business</h3>
                                <h4><sup>$</sup>19<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="box">
                                <h3>Developer</h3>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <span className="advanced">Advanced</span>
                                <h3>Ultimate</h3>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ section */}
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-up">F.A.Q</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                    </p>
                                </div>
                            </li>
                        </ul>
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
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>info@example.com<br />contact@example.com</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-box">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
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
