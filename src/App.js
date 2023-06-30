import logo from './logo.svg';
import './App.css';
import Rooter from './components/Rooter/Rooter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rooter>
        </Rooter>
      </BrowserRouter>
    </div>
  );
}

export default App;
