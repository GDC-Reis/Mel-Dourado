import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect} from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Pages
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About'

//Context
import { AuthProvider } from './context/AuthContext';

//Components
import Navbar from './components/Navbar'

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
     <AuthProvider value={{user}}>
      <BrowserRouter>
        <h1>Mel Dourado</h1>
        <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={ !user ? <Register/> : <Navigate to="/home"/>}/>
            <Route path='/login' element={ !user ? <Login/> : <Navigate to="/home"/> }/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
