import React from 'react';
import Nav from '../Headers/Nav'
import SingleMovie from '../Body/SingleMovie'
import movies from '../movies'

const SearchResult = (props) =>{
  const name = props.match.params.query.toLowerCase()

  return(
    <>
      <Nav />
      <div className='bundle-movie' style = {{marginTop :'0'}}>
            <h1> Search Result </h1>
            <div className="movies" >
                {
                  movies.filter(movie => movie.name.toLowerCase().includes(name)).map((result) => (
                                    <SingleMovie movie={result}/>
                                ))
                }
          </div>
      </div>
  </>


  )
}

export default SearchResult
