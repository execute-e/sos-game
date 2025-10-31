import About from "./modules/About/About"
import Header from "./modules/Header/Header"
import Hero from "./modules/Hero/Hero"

function App() {
  return (
    <div className="font-base flex flex-col">
     <Header />
     <main className="grow">
        <Hero />
        <About />
     </main>
    </div>
  )
}

export default App
