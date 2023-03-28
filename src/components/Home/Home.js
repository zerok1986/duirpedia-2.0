import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1>The DUIRPEDIA</h1>
      <p>Please select a category from the navigation menu</p>
      <div>
        <Link to="/films">Films</Link>
        <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/species">Species</Link>
        <Link to="/starships">Starships</Link>
        <Link to="/vehicles">Vehicles</Link>
      </div>
    </div>
  )
}

export default Home
