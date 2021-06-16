const TopBar = () => {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@tanjconsulting.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+220 7488392</span></i>
                </div>

                <div className="cta d-none d-md-flex align-items-center">
                    <a href="#about" className="scrollto">Get Started</a>
                </div>
            </div>
      </section>
    )
}

export default TopBar
