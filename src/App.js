import { useState, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const{test} =useSelector(state => state.app)
  console.log(test);
  return (
    <div className="flex flex-col gap-8 h-screen items-center border border-red-500 justify-center">
      aa
    </div>
  );
}

export default App;
