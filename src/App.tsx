import About from "./modules/About/About"
import Features from "./modules/Features/Features"
import Header from "./modules/Header/Header"
import Hero from "./modules/Hero/Hero"
import Newsletter from "./modules/Newsletter/Newsletter"
import Quotes from "./modules/Quotes/Quotes"
import Requirements from "./modules/Requirements/Requirements"

function App() {
  return (
    <div className="font-base flex flex-col">
     <Header />
     <main className="grow">
        <Hero />
        <About />
        <Features />
        <Requirements />
        <Quotes />
        <Newsletter />
     </main>
    </div>
  )
}

export default App
