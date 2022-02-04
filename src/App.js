import './App.css';
import Form from './Components/form';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Components/home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
