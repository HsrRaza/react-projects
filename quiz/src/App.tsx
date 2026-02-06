import { useState } from "react"
import Questions from "./components/Questions"
import Timers from "./components/Timers"
import Results from "./components/Results"

function App() {

  const [isOver, setOver] = useState(false)

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <Timers/>
      {
        isOver ? (
          <Results/>
        ) : (
          <Questions setOver={setOver} />
        )
      }
    </div>
  )
}

export default App