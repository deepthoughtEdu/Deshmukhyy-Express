import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import AboutUs from './screens/About';
import Services from './screens/Services';
import Login from './screens/Login';
import Register from './screens/Register';
import { getLoggedInUser } from './utilities';
import Loading from './components/Loader';

const PublicRoutes = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

const PrivateRoutes = function (props) {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/about-us" element={<AboutUs {...props}/>} />
            <Route path="/services" element={<Services {...props}/>} />
          </Routes>
        </BrowserRouter>
      )
}

export default function Router() {
    const [isAuthenticated, setAuthenticate] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState({})

    useEffect(() => {
        async function validateAuth ()  {
            try {
              const user = await getLoggedInUser();
              if (user) {
                setAuthenticate(true);
                setLoggedInUser(user);
              }
            } catch (e) {}

            setLoading(false);
        }

        validateAuth();
  
    }, [isAuthenticated]);

    if (isLoading) return <Loading />;

    return isAuthenticated ? <PrivateRoutes user={loggedInUser} /> : <PublicRoutes   />
}