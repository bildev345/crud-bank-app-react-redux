import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App6.css';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import UpdateClient from './components/UpdateClient';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>CRUD REACT-REDUX SIMPLE BANK APPLICATION</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClientList />} />
          <Route path='/add-user' element={<AddClient />} />
          <Route path='/update-user/:id' element={<UpdateClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
