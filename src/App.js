import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Router>
        <Routes>
          <Route index element = {<ListEmployee/>}></Route>
        </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
