import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const MainLayout = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <HeroSection />
            <Main />
            <Footer />
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default MainLayout
