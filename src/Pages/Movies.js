import React from 'react';
import Header from '../Headers/Header';
import SingleMovie from '../Body/SingleMovie'
import movies from '../movies'


const Movies = (props) =>{

  return(
    <div>
          <Header />
          <div className='bundle-movie'>
                <h1> Movies </h1>
                <div className='movies' >
                      {
                        movies.reverse().map(function(movie){
                            if(movie.type==='movies'){
                                return <SingleMovie movie={movie} key={movie.name} addToMyList={props.addToMyList}/>;
                            }
                        }
                      )
                      }
                </div>
          </div>
    </div>
  )
}

export default Movies
