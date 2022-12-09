// import { Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import MainInfo from './components/mainInfo/MainInfo';
import AboutProject from './pages/aboutProject/AboutProject';
import AboutUs from './pages/aboutUs/AboutUs';
import Contacts from './pages/contacts/Contacts';
import Main from './pages/Main/Main';
import Partners from './pages/partners/Partners';

const routes = [
    //Main page
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Header />,
            },
            {
                path: '',
                element: <MainInfo />,
            },
        ],
    },
    // About project
    {
        path: 'project',
        element: <AboutProject />,
    },
    // About us
    {
        path: 'aboutUs',
        element: <AboutUs />,
    },
    // Partners
    {
        path: 'partners',
        element: <Partners />,
    },
    // Contacts
    {
        path: 'contacts',
        element: <Contacts />,
    },
];
export default routes;
