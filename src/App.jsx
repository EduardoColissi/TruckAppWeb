import { GlobalState } from "./global/GlobalState"
import { Router } from "./routes/routes"


function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )

}

export default App