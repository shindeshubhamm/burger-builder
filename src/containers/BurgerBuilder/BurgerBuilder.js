import React, { useState } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  })

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <div>Built controls</div>

    </Aux>
  )
}

export default BurgerBuilder
