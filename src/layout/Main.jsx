import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <>
            <ScrollToTop />

            {/* navbar */}
            <Header />

            {/* main */}
            <main className='container'>
                <Outlet />
            </main>

            {/* footer */}
            <Footer />
        </>
    );
};

export default Main;