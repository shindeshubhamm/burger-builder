import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map((igKey) => {
      return (<li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey]}
      </li>)
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
}

export default OrderSummary
