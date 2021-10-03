import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className='text-danger'>404! Page Note Found!</h1>
      <Link to='/home'>
        <button className='btn btn-primary'>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
