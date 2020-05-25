import React from 'react'
import SingleMovie from './SingleMovie'

import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom'



const AllMovie = (props) => {
  const { movies, link } = props

  return (
    <div className="bundle-movie">

      <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between', marginBottom:'10px'}}>
        <h1 > {props.title} </h1>
        <Link to={link}>
          <h5> More </h5>
        </Link>
      </div>

        <div className='movies' >
              {movies.length > 0 &&(
                movies.map(movie => <SingleMovie movie ={movie} key={movie.name} addToMyList={props.addToMyList} />)
              )
              }
        </div>
    </div>
  );
};


export default AllMovie;
