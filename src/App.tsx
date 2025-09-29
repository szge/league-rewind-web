
import './App.css'
import Hero from './Hero'

function App() {
  return (
    <div className="scroll-container min-h-screen">
      <Hero />
      <div className="h-[200vh] bg-gray-900 flex items-center justify-center">
        <h2 className="text-white text-4xl">Next Section</h2>
      </div>
    </div>
  )
}

export default App
