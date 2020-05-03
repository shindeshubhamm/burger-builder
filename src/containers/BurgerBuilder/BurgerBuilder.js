import React, { useState, useEffect } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Aux/Aux'

// Price per unit contents
const INGREDIENT_PRICES = {
  salad: 10,
  cheese: 15,
  meat: 25,
  bacon: 20
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  })
  const [totalPrice, setTotalPrice] = useState(30)
  const [purchasable, setPurchasable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)

  // Update purchasable when ingredient count changes
  useEffect(() => {
    updatePurchasable()
    // eslint-disable-next-line
  }, [ingredients])

  const updatePurchasable = () => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    setPurchasable(sum > 0)
  }

  const addIngredientHandler = (type) => {
    const newCount = ingredients[type] + 1
    const updatedIngredients = { ...ingredients }
    updatedIngredients[type] = newCount
    setIngredients(updatedIngredients)
    setTotalPrice(totalPrice + INGREDIENT_PRICES[type])
  }

  const removeIngredientHandler = (type) => {
    const newCount = ingredients[type] - 1
    if (newCount < 0) return
    const updatedIngredients = { ...ingredients }
    updatedIngredients[type] = newCount
    setIngredients(updatedIngredients)
    setTotalPrice(totalPrice - INGREDIENT_PRICES[type])
  }

  const purchaseHandler = () => {
    setPurchasing(true)
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    alert('Bought!')
  }

  const disabledInfo = {
    ...ingredients
  }
  for (let key in disabledInfo) {
    disabledInfo[key] = (disabledInfo[key] <= 0)
  }

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <Modal show={purchasing} modalClosed={purchaseCancelHandler} >
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={totalPrice}
        />
      </Modal>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        ordered={purchaseHandler}
        disabled={disabledInfo}
        price={totalPrice}
        purchasable={purchasable}
      />
    </Aux>
  )
}

export default BurgerBuilder
