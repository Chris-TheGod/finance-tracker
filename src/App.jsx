//Router
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Pages, components
import { Home } from './pages/home/home';
import { Login } from './pages/login/Login';
import { Singup } from './pages/signup/Singup';
import { Navbar } from './components/Navbar';

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Singup />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
