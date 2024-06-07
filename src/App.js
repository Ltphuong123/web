import { useState, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";

import { Home, Login, Public } from "./containers/public";
import path from "./ultis/path";

function App() {
  return(
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element = {<Public/>}>
            <Route path={path.HOME}  element = {<Home/>}/>
            <Route path={path.LOGIN}  element = {<Login/>}></Route>
          </Route>
          
        </Routes>
      </div>
    </>
  );
}

export default App;
