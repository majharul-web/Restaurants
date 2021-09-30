import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  const { strMeal, strMealThumb, strInstructions,idMeal } =meal;

  return (
    <div className='col-md-4 mx-auto my-5'>
      <Card>
        <Card.Img variant='top' src={strMealThumb} className='w-75 img-thumbnail mx-auto my-5' />
        <Card.Body>
          <Card.Title>Food Name:{strMeal}</Card.Title>
          <Card.Title>ID:{idMeal}</Card.Title>
          <Card.Text>{strInstructions?.slice(0, 300)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MealDetails;
