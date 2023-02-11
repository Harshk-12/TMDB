import axios from "axios";
import React, { useState } from "react";
import './Movie.css'

function Movie() {
  let [inputValue, setValue] = useState("");
  let [array, setarray] = useState([]);
  

  function handlechange(e) {
    setValue(e.target.value);
  }

  function find(e) {
    e.preventDefault();
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=8ecfe545cc37d9b6acd04b7018bedf66&language=en-US&query=" +
          inputValue +
          "&page=1&include_adult=false"
      )
      .then((response) => {
        setarray(response.data.results);
        console.log(response.data.results);
      });
     setValue('')
  }

  return (
    <div className="form-container" >
      <form onSubmit={find} className='form'>
      <h1>TMDB MOVIE SEARCH</h1>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a movie"
          onChange={handlechange}
        />
        <input type="submit" />
        </div>


       <div className='array-container'>

        {array.map((item) => {
          return(
            <div className="item-container">
            
            <img src={item.backdrop_path?"https://www.themoviedb.org/t/p/w220_and_h330_face"+item.backdrop_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0UqyC-AlKM0Rzi-ZMsnDExz_NMvvbGAJ7A&usqp=CAU"} 
        ></img>
            
            <h4>{item.title
            }</h4>
          </div>
            )
          })}
        </div>
      </form>
      
    </div>
  );
}

export default Movie;
