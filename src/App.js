import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import DiscoverMovies from "./components/discover/movies"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <DiscoverMovies />
      </div>
    </div>
  )
}

export default App
