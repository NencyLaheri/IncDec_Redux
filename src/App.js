import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';
import { mulNumber,divNumber } from './actions';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const myState1=useSelector((state)=>state.muldivTheNumber)
  const dispatch=useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment Decrement Counter</h1>
      <h4>using react and redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' onClick={()=>dispatch(decNumber())}><span> - </span></a>
        <input type="text" name='quantity' className='quantity_input' value={myState}/>
        <a className='quantity_plus' title='Increment' onClick={()=>dispatch(incNumber(5))}><span> + </span></a>
      </div>
    </div>
    <div className="container" style={{marginTop:"5%"}}>
      <h1>Multiplication/Divide Counter</h1>
      <h4>using react and redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Divide' onClick={()=>dispatch(divNumber())}><span> / </span></a>
        <input type="text" name='quantity' className='quantity_input' value={myState1}/>
        <a className='quantity_plus' title='Multiply' onClick={()=>dispatch(mulNumber())}><span> * </span></a>
      </div>
    </div>
    </>
  );
}

export default App;
