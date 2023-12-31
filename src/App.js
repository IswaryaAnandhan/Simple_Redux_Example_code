
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './action-creators';
import './App.css';


function App() {
  const counter = useSelector((state=>state.counter))
  const dispatch =useDispatch()
  const {increment,decrement,reset}= bindActionCreators(actionCreators,dispatch);
  return (
    <div className="App">
     <button onClick={()=>increment(1)} className="btn btn-success">+</button>
     <h1>{counter}</h1>
     <button onClick={()=>decrement(1)} className="btn btn-warning">-</button>
     <button onClick={()=>reset(0)} className="btn btn-primary">Reset</button>
    </div>
  );
}

export default App;
