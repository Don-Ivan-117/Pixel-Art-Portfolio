import About from "./sections/About"
import Artwork from "./sections/Artwork"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <main className="bg-neutral-cream">
        <Hero/>
        <Artwork/>
        <About/>
        <Contact/>
      </main>
    </>
  )
}

export default App
