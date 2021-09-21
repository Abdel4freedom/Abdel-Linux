import React, {useReducer} from 'react';
import "./styles.css";

// Create a simple app with a "counter" div and two buttons.
// Click button add 1 to the count.
// Click  sec button will substract 1 from the count.
// the value of count will be held in state.
// =================================================================================================
// 2. Craete an initial state for the App component
// for now, this just has one proprety
// But we are not done yet. We still need to define a REDUCER.
// * What is a reducer in this context?
// Remember the array method .reduce()? This is similar - we define some logic which resolves to a SINGLE value.

const initialState = {
  count: 0,
  
}

// 3. Create a reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1}

    case "decrement" :
      return{count: state.count - 1}  

     case "multiply" : 
      return {count: state.count * 10} 

     case "reset" :
       return {count: state.count * 0} 
  
    default:
      break;
  }

}





const App = () => {
  
  // 1. Creat a state an updater function (quite like setState())
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function add + 1

  const addOne = () => {
    //  Add one to "count" proprety of "state"

    dispatch( {type: "increment"} )


   }

  //  Function substract - 1

  const substractOne = () => {
    dispatch({type: "decrement"})
  }

  // Multiplay X 10

  const multiplayXTen = () => {
    dispatch({type: "multiply"})
  }

  // Reset

  const reset = () => {
    dispatch({type: "reset"})
  }




  return (
    <div className="container">
      <div className="counterDiv">Count: {state.count}</div>
      <button className="btn" onClick={addOne}>+</button>
      <button className="btn" onClick={substractOne}>-</button>
      <button className="btn" onClick={multiplayXTen}>*10</button>
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  )
}

export default App;

