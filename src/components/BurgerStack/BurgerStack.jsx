// src/components/BurgerStack/BurgerStack.jsx

import IngredientList from "../IngredientList/IngredientList";

const BurgerStack = (props) => {
    return <ul>
        {props.stack.map((ingredient, index) => (
            <li key={index}  style={{backgroundColor: ingredient.color}}>
                {ingredient.name}
                <button onClick={() => props.removeFromBurger(ingredient)}>x</button>
                </li>
        ))}
        
        
        
        </ul>;
  };
  
  export default BurgerStack;
  