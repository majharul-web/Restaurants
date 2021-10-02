import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Food = (props) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;

  const url = `/food/${idMeal}`;
  const history=useHistory();

  const handleDetails=()=>{
    history.push(url)
  }
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
          <br />
          <Button onClick={handleDetails} className='btn btn-danger mt-2'>See Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Food;
