import React, { useEffect, useContext } from 'react'
import movies from '../movies.js'
import { MyListContext } from '../Context/MyListContext'
import { FiStar } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

const SingleMovieDetail = (props ) => {
  const type = props.match.params.type
  const name = props.match.params.name
  var replaced = name.replace(/-/g, ' ');
  const movie = movies.find(mov => mov.type === type && mov.name === replaced)
  var x;
  const style = {
    // background: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0.7) 100%),url(${movie.poster})`,
  }

    return(
          <>
              {
                movie ===undefined?(
                  <div className='single-movie-detail' style={{
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                  }}>
                    <div className="title">
                        <h1>
                            No Movie Found
                        </h1>
                    </div>
                  </div>
                ):(
                  <div className='single-movie-detail' style={style}>

                        <div className='movie-thum' >
                            <img src={movie.thumnail} />
                        </div>
                        <div className='all-del'>
                            <div className="title">
                                <h1>
                                    {movie.name}
                                </h1>
                            </div>

                            <div className="ex-del">

                                <div className='mar move-rate'>
                                    <FiStar  className='icon-star' />
                                    <span>{movie.rating} </span>
                                </div>
                                <div className="mar rl-years">
                                    {movie.year}
                                </div>

                                <div className="mar dur-sesn">
                                    {
                                      movie.type==='movies'?(
                                        <p>
                                            {movie.runtime}
                                        </p>
                                      ):(
                                          <p>
                                              <span> Seasons </span>{movie.season}
                                          </p>
                                      )
                                    }
                                </div>
                            </div>

                            <div className="description" style={{lineHeight : '20px', margin : '30px 0 50px 0', padding : '0 20px 0 10px',fontSize : '12px', fontWeight : '700'}}>
                                  <p>
                                      {movie.description}
                                  </p>
                            </div>

                            <div className="btn-grp">
                                <button className='btn btn-red'>
                                    <FiPlay className='icon-play'/>
                                    <p>watch</p>
                                </button>


                            </div>
                        </div>
                  </div>

                )
              }
          </>

        )
}

export default SingleMovieDetail
