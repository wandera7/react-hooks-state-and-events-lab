import React ,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClass,setAppClass]=useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"
  function handleClick(){
    setAppClass((appClass)=>!appClass)
  }
  return (
    <div className={appClass?'App light':'App dark'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass?'Dark Mode':'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
