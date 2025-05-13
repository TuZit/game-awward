import { NavBar, Hero, About, Features, Story, Contact, Footer } from './components'

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <div className='min-h-full h-full' style={{height: '1200px'}}></div>
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
