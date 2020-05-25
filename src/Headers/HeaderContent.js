import React, { useContext } from 'react'
import { FiStar } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

 const HeaderContent = (props) =>{
   const { movie, myList, addToMyList, removeFromList } = props;
   return(
     <div  className="hero-movie" >

          <div className='hero-movie-content'>
            <div className='duration'>
                <h3> Duration : {movie.runtime} </h3>
            </div>
            <div className='gening'>
                <div className='rating'>
                  <FiStar className='icon-star'/>
                    {movie.rating}
                </div>
                <div className='genre'>
                    {movie.genres.map(genre =>(
                      <p className='singleGenre' key={genre}>
                          {genre}
                      </p>
                    ))}
                </div>
            </div>
            <div className='title'>
                <h1>{movie.name}</h1>
            </div>
            <div className='description'>
                <p> {movie.description} </p>
            </div>
            <div className="btn-grp">
                <button className='btn btn-red'>
                    <FiPlay className='icon-play'/>
                    <p>watch</p>
                </button>

                  {/* checking movie is in myList or  not */}
                {
                    myList.find((mov) => mov.name === movie.name)?(
                      <button className='btn btn-grey' onClick={() => removeFromList(movie.id)}>
                        <FiCheck className='icon-add' />
                        <p>my list</p>
                      </button>
                    ):(
                      <button className='btn btn-grey' onClick={() => addToMyList(movie.id)}>
                        <FiPlus className='icon-add' />
                        <p>add list</p>
                      </button>
                    )
                }
            </div>
          </div>

      </div>
   )
 }

export default HeaderContent
