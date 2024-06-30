import './App.css'
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/counterslice';
import { useState } from 'react';


function App() {


const  [range, setRange] = useState("")

//access state
const count= useSelector((state)=>state.counterReducer.value)

//call action
const dispatch = useDispatch()
const handleRange =()=>{

  if(!range ){
    alert('please enter range ')

  }
  else{
    dispatch(rangeChange(Number(range)))
  }
}


console.log(range);
  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}> 
     <div className='maindiv bg-light text-center p-4 border rounded-2 justify-content-center align-items-center shadow-lg' style={{ width: '450px' }}>
        <h1 className='text-info'>Counter Application</h1>
        <h1 className='p-5 'style={{fontSize:'100px'}} >{count}</h1>
        <div className='mt-5 d-flex justify-content-evenly'>
        <button type='button' className='btn btn-warning'  onClick={()=>dispatch(decrement())}>Decrement</button>
        <button type='button' className='btn btn-danger'onClick={()=>dispatch(reset())}>Reset</button>
        <button type='button' className='btn btn-success'  onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        <div className='d-flex justify-content-center mt-5'> 
        <TextField   style={{ width: '300px' }}  id="outlined-basic" label="Range" variant="outlined" onChange={(e)=>setRange(e.target.value)} />
        <button type='button' className='btn btn-primary' onClick={handleRange}>Click</button>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
