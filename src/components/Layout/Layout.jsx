import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

export default function Layout({ darkMode, toggleDarkMode }){
    return(
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Outlet context={{ darkMode, toggleDarkMode }}/>
            <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        </>
    )
}