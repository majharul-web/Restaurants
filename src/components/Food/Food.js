import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;

  const url = `/food/${idMeal}`;
  return (
    <div className='col'>
      <Card>
        <Card.Img variant='top' src={strMealThumb} className='w-75 img-thumbnail mx-auto my-5' />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 300)}</Card.Text>

          <Link to={url}>
            <Button className='btn btn-warning'>Show Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Food;
