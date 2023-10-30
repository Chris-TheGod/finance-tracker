//Router
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Pages, components
import { Home } from './pages/home/home';
import { Login } from './pages/login/Login';
import { Singup } from './pages/signup/Singup';
import { Navbar } from './components/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext();

  //   <Route  path="/" element={user ? <Home /> : <Register />} />
  // <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
  // <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Login />} />
            <Route path='login' element={!user ? <Login /> : <Home />} />
            <Route path='signup' element={!user ? <Singup /> : <Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
