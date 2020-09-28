import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function Mail({meal}) {
  const [Ingredients, setIngredients] = useState([])
  const [Measures, setMeasures] = useState([])
  useEffect(() => {
      setIngredients([])
      setMeasures([])
      Object.keys(meal).forEach(x => {
        if(x.includes('Measure') && meal[x] !== ''){
            setMeasures( MeasuresOld => [...MeasuresOld, x])
        }
        if(x.includes('Ingredient') && meal[x] !== ''){
            setIngredients(IngredientsOld => [...IngredientsOld, x])
        }
      })
  }, [meal])

  return (
      meal.strCategory ? (
        <Container>
        <h1>{meal.strMeal}</h1>
  
  
          <section>
                  <div className="ingre">
  
                      <img src={meal.strMealThumb} alt="food"/> 
                      <p><span>Category:</span> {meal.strCategory}</p>
                      <p><span>Area:</span> {meal.strArea}</p>
                      {meal.strTags && (<p><span>Tags:</span> {meal.strTags}</p>)}
                      <ul>
                          <h3>Ingredientes</h3>
                          {Ingredients.map((ingredient, index) => (
                              <li key={index}>{meal[ingredient]}: {meal[Measures[index]]}</li>
                          ))}
                      </ul>
  
                  </div>
  
                  <div className="method">
                      <h3>Modo de preparo</h3>
                      <p>{meal.strInstructions}</p>
              </div>
          </section>
          <div className="recipeVideo">
              <h2>Video Recipe</h2>
              <iframe width="750" height="450" title="video" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}/>
          </div>
  
    </Container>
      ): (<></>)
  ) 
}

export default Mail;