import React from 'react'
import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Aux'

const OrderSummary = ({ ingredients, purchaseCancelled, purchaseContinued }) => {
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
      <Button btnType='Danger' clicked={purchaseCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary
