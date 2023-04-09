// import axios from 'axios'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost';
import {orginals, action } from './url'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={action}  title='Action' isSmall />
      
    </div>
  );
}

export default App;
