
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './index.css'

function App() {
  const portfolioCount = 5;
  return (
    <>
      <Header />
      <main>
        <section id="home"><Home portfolioCount={portfolioCount}/></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
        <section id="about"><About /></section>
      </main>
      <Footer />
    </>
  )
}

export default App