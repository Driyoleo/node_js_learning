import Navbar from './components/navbar'
import Tcard from './components/tcard'
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Tcard title="mountains" desc="In the Oxford English Dictionary a mountain is defined as " />
          <Tcard title="mountains" desc="In the Oxford English Dictionary a mountain is defined as " />
          <Tcard title="mountains" desc="In the Oxford English Dictionary a mountain is defined as " />
          <Tcard title="mountains" desc="In the Oxford English Dictionary a mountain is defined as " />
        </div>

      </main>
    </>
  )
}

export default App
