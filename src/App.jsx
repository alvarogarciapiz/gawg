import './styles/globals.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Features from './components/features';
import Footer from './components/footer';
import Properties from './components/properties';
import Generator from './components/generator';
import Pricing from './components/pricing';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Properties />
      <Pricing />
      <Generator />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;