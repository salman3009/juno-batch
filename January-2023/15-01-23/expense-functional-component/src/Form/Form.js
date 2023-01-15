import './Form.css';
import {useState} from 'react';
function Form(){

  const[getBalance,setBalance] = useState(0);
  const[getAmount,setAmount] = useState(0);

  const onAddHandler=()=>{
      console.log("onAdd",getAmount);
  }

  const onRemoveHandler=()=>{
    console.log("OnRemove",getAmount);
  }

  const onAmountHandler=(event)=>{
    console.log(event.target.value);
    setAmount(event.target.value);
  }

      return (<div className="border-box">
        <div className="form-heading">Balance:{getBalance}</div>
        <div className="form-input">
           <input type="number" name="amount" onChange={onAmountHandler}/>
        </div>
        <div className="form-button">
          <button onClick={onAddHandler}>Add</button>
          <button onClick={onRemoveHandler}>Remove</button>
        </div>
      </div>)
}
export default Form;