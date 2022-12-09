import Header from './components/header/Header';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import withRouter from './hoc/withRouter';
import Footer from './components/footer/Footer';

function App() {
    const elements = useRoutes(routes);
    return (
        <div className='App'>
            <Header />
            {elements}
            <Footer />
        </div>
    );
}

const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
