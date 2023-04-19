import './App.css';
import Navbar from './components/Navbar';
import Page from './components/Page';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
function App() { 
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Page>
                    <Route path = "/" Component={AboutPage}/>
                    <Route path = "/work" Component = {WorkPage}/>
                    <Route path = "/contact" Component = {ContactPage}/>
                </Page>
            </div>
        </BrowserRouter>
    );
}

export default App;
