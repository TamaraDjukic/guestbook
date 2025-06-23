import './App.css';
import Home from './components/HomePage';
import Message from './components/MessagePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/messages" element={<Message />}></Route>
          </Routes> 
    </BrowserRouter>
  );
}

export default App;