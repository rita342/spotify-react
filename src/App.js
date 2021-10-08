import {BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';


import VerticalNavbar from './components/VerticalNavbar';
import Album from './components/Album';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavbar />
      <VerticalNavbar />
      <Route path='/' exact component={Home} />
      <Route path='/Album/:id' exact component={Album} />
      
      </Router>
      <MyFooter />
    </div>
  );
}

export default App;