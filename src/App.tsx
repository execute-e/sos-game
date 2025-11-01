import About from "./modules/About/About"
import Features from "./modules/Features/Features"
import Header from "./modules/Header/Header"
import Hero from "./modules/Hero/Hero"

function App() {
  return (
    <div className="font-base flex flex-col">
     <Header />
     <main className="grow">
        <Hero />
        <About />
        <Features />
     </main>
    </div>
  )
}

export default App
