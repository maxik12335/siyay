import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/NavbarBase/NavbarBase';
import AppRouter from './components/AppRouter';
// import Footer from './components/Footer/Footer';
import ScrollToTop from './components/UI/ScrollToTop';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;
