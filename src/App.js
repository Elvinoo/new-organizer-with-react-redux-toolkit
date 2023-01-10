
import MaingPage from './pages/MainPage/MaingPage';
import ListPage from './pages/ListPage/ListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './common.css';
//import { useSelector } from 'react-redux';
function App() {

  // const generetadId = useSelector((store) => store.id.id);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MaingPage />} />
          <Route path="/list/:id" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
