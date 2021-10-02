import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Food from "../Food/Food";
import './Foods.css'

const Foods = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div >
      <div className='mt-3'>
        <Form.Group onChange={handleSearch} className='mb-3 w-50 mx-auto' controlId='formBasicPassword'>
          <Form.Control type='text' placeholder='search your favorite food' />
        </Form.Group>
      </div>

      <div className='food-container container'>
        
        {meals?.map((meal) => (
          <Food meal={meal} key={meal.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
