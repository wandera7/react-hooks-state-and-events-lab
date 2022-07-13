import React  from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [filterItems,setFilterItems]=useState(items)
  const [select,setSelect]=useState("All")
  function handleChange(e){
    setSelect(e.target.value)
  }
  const itemDisplay=filterItems.filter((item)=>{
    if(select==='All'){
      return true
    }
    else{
      return item.category===select
    }

  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
