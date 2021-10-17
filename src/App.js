import React,{ Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './elements/navbar/navbar';
import AppRoutes from './routes/routes';
import "./App.css";
import LoaderComponent from './elements/loader/loader';
import { useDispatch } from 'react-redux';
import { createToken, setUuid } from './redux/actions/sesion-actions';
import { v4 as uuid } from 'uuid'
import SesionService from './service/sesionServices';

function App() {
  //Estado general del proyecto
  const [userId,setUserId] = useState('');
  const [token,setToken] = useState('');

  let dispatch = useDispatch();

  useEffect(()=>{
    //Funciones asincronas necesarias
    async function start(uuid){
      let service = new SesionService();
      let newToken= await service.createToken(uuid);
      localStorage.setItem('token',newToken);
      setToken(newToken);
    }

    async function verify(token){
      let service = new SesionService();
      let consulta= await service.verifyToken(token);
      return consulta;
    }

    if(localStorage.getItem('token')){
      //Verificamos que el token sea valido
      let tokenUser = localStorage.getItem('token');
      verify(tokenUser)
      .then((data)=>{
        if(!data.token){
          start();
        }
      });
    }if(userId === '' && token === ''){
      //Generamos un nuevo token en caso de que no exista
      let uidGenerated = uuid();
      dispatch(setUuid(uidGenerated));
      dispatch(createToken(uidGenerated));
      setUserId(uidGenerated);
      start(uidGenerated)
    }
  },[userId,token])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Suspense fallback={<LoaderComponent message="Configurando sitio"/>}>
          <AppRoutes/>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
