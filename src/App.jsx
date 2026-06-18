import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme';
import Header from './shared/Header';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MethodologiesPage from './pages/Methodologies';
import ResourcesPage from './pages/Resources';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        maxWidth: '100vw',
        margin: 0,
        padding: 0,
        overflowX: 'hidden'
      }}>
        <Header />
        <NavBar />
        <main style={{
          flex: 1,
          width: '100vw',
          maxWidth: '100vw',
          margin: 0,
          padding: 0,
          overflowX: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/methodologies" element={<MethodologiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
