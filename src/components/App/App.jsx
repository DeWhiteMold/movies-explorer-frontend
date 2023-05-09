import './App.scss';
import '../Main/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Main /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
