const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Tanj Consulting</h3>
                            <p>
                                47 Kairaba Avenue <br />
                                Fajara, K.S.M.D <br />
                                Serrekunda<br />
                                The Gambia <br/><br/>
                                <strong>Phone:</strong> +220 7448523 / 9852147<br />
                                <strong>Email:</strong> tanjconsult@gmail.com<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Porfolio</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#partners">Partners</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Fish Import & Export</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Clothing & Jewelries</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Art & Music</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Construction</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Furniture</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-lg-flex py-4">
                <div className="me-lg-auto text-center text-lg-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Tanj Consulting</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                        Designed by <a href="https://bootstrapmade.com/">Alagie F. Nget</a>
                    </div>
                </div>
                <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
