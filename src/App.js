import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header'
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu';
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import Findus from './container/Findus/Findus';
import Footer from './container/Footer/Footer';


const App = () => {
    return (
    <div>
     <Navbar/>
     <Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Chef/>
     <Intro/>
     <Laurels/>
     <Gallery/>
     <Findus/>
     <Footer/>
    </div>
    );
}
export default App;
