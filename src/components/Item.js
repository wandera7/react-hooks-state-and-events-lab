import React ,{useState} from "react";

function Item({ name, category }) {
  const [added,setAdded]=useState(false)
  function handleClick(){
    setAdded((add)=>!add)
  }
  return (
    <li className={added?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{added?'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
