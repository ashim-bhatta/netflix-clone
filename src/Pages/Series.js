import React from 'react';
import Header from '../Headers/Header';
import SingleMovie from '../Body/SingleMovie'
import movies from '../movies'


const Series = (props) =>{

  return(
    <div>
        <Header />
        <div className='bundle-movie'>
                <h1> Series </h1>
                <div className='movies' >
                        {
                          movies.reverse().map(function(movie){
                              if(movie.type==='series'){
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

export default Series
