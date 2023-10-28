//Router
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages, components
import { Home } from './pages/home/home';
import { Login } from './pages/login/Login';
import { Singup } from './pages/signup/Singup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='signup'
          element={<Singup />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
