/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback } from 'react'

 import { Container } from './styles';

function InputMail({ setMeal }) {
    const handleGenerateMeal = useCallback( async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const {meals}  = await response.json()
        console.log(meals[0])
        setMeal(meals[0])
    }, [setMeal])

  return <Container>
      <h1>Random Mail Generator</h1>
      <button onClick={handleGenerateMeal}>get meal 🍔</button>
  </Container>
}

export default InputMail