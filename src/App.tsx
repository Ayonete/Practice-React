import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChildComponent } from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState<number>(0); // How use state works?

  const foodList = ["apple", "banana", "orange"];
  const data = "Whatever you want"; // For passing data to child component
  const foodListWithActions = [{food: 'apple', action: 'You chose the apple'}, {food: 'banana', action: 'You chose the banana'}, {food: 'orange', action: 'You chose the orange'}];

  /*NOT IN USE
  
  const incrementCount = () => {
    setCount(count + 1);
  }*/
  

  /** Use effect is called on 2 conditions
   * 1. When the component initially renders
   * 2. When any value in the dependency array changes. Observe what happens when count updates in the interval.
   */
  useEffect(() => {
    const incrementNumber = () => {
      setTimeout(() => {
        setCount(count + 1);
        //alert(`The count is ${count}`);
      }, 3000);
    };

    // return myAlert();
    incrementNumber();
    console.log(`The count is ${count}`);
  }, [count]);


  return (
    <div className="App">
      {/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      {
        <div>
          <h1 style={{ marginBottom: "20px" }}>
            {count /* You can embed variables in text like this */}
          </h1>
          <p style={{color: 'gray', fontSize:'0.95rem', fontStyle:'italic'}}> This count increases by 1 every 3 seconds</p>
          <div style={{ flex: 1, flexDirection: "column" }}>
            {/*
              foodList.map((food, index) => {
                return (
                  <button
                    style={{
                      padding: 10,
                      cursor: "pointer",
                      display: "block",
                      minWidth: "80px",
                      marginBottom: 10,
                      border: 4,
                      borderRadius: 5,
                      background: "black",
                      color: "white",
                      maxWidth: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    
                  >
                    {food} 
                  </button>
                );
              }) // Why keys??
              /* Keys help React identify which items have changed, are added, or removed.
           Keys should be given to the elements inside the array to give the elements a stable identity.
           The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. */
            }
            {foodListWithActions.map((food, index) => {
          return <button onClick={()=> alert(food.action)} style={{padding:10, cursor:'pointer', display:'block', minWidth:'80px', marginBottom: 10, border: 4, borderRadius: 5, background:'black', color: 'white', maxWidth:'100px', marginLeft:'auto', marginRight: 'auto'}} key={index}>{food.food}</button> })
          

          
         
            /** Here we use a nested object to assign an alert text as well as label for the button */}
          </div>
        </div>
      }
      {/* Call the child component*/}
      <div style={{ padding: 20 }}>
        <ChildComponent  data={data} />
      </div>
    </div>
  );
}

export default App;
