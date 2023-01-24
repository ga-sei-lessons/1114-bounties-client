import Home from './components/pages/Home'
import NewBounty from './components/pages/NewBounty'
import Navbar from './components/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/new-bounty'
            element={<NewBounty />}
          />
        </Routes>
      </main>

      {/* could have a footer */}
    </Router>
  );
}

export default App;
