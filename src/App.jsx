import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 text-neutral-500 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}

          {/* Footer */}

        </div>
      </Router>
    </>
  )
}

export default App
