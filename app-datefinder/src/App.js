import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDates from './components/Date/ListDates.js';
import AddDates from './components/Date/AddDates.js';
import ReadDate from './components/Date/ReadDate';
import UpdateDate from './components/Date/UpdateDate';
import Home from './components/Date/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/date" element={<ListDates/>} />
          <Route path="/addDate" element={<AddDates/>} />
          <Route path="/readDate/:id" element={<ReadDate/>} />
          <Route path='/updateDate/:id' element={<UpdateDate/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}
export default App
