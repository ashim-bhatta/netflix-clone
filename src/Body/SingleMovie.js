import React, {useContext} from 'react';
import SingleMovieDetail from './SingleMovieDetail'

import { MyListContext } from '../Context/MyListContext'
import { FiStar } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { FiHeart} from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

import { Link } from 'react-router-dom'

import '../css/Body/SingleMovie.css'

const SingleMovie = (props) =>{
  const [ myList, addToMyList, removeFromList] = useContext(MyListContext)
  var replaced = props.movie.name.replace(/\s/g, '-');
  const url = `${props.movie.type}/${replaced}`
  return(
      <>
          <div className='SingleMovie'>
            <div className="movie-thumnail">
              <img src={props.movie.thumnail} alt={props.movie.name} />
            </div>
            <div className='movie-del'>
                <div className='title'>
                  <h2> {props.movie.name} </h2>
                </div>
            </div>
            <div className='secondEmpty'>
                <div className='f-row'>
                          {  /* movie name */}
                        <h2 style= {{padding : '5px 2px'}}> {props.movie.name} </h2>
                            {/*/ play btn  */}
                        <div className='play-wrapper scaleUp'>
                            <FiPlay className='' style={{fill : 'white', color : 'white', fontSize : '12px'}}/>
                        </div>


                              {/* checking movie is in myList or not */}
                        {
                            myList.find((mov) => mov.name === props.movie.name)?(
                              <div className='play-wrapper scaleUp'>
                                  <FiCheck className='scaleUp' style={{color : 'white', fontSize : '12px'}} onClick={() => removeFromList(props.movie.id)}/>
                              </div>
                            ):(
                              <div className='play-wrapper scaleUp'>
                                  <FiPlus className='scaleUp' style={{color : 'white', fontSize : '12px'}} onClick={() => addToMyList(props.movie.id)}/>
                              </div>
                            )
                        }

                        {/* checking if movie type is series or movie */}
                        {  props.movie.type==='series' ?(
                            <div className='no-season' style={{display : 'flex', fontWeight: 300, fontSize : '12px', letterSpacing : '1px', justifyContent :'center',   alignItems: 'flex-end'}}>
                                <h3 style={{padding : '5px 10px 0px 0'}}>
                                    {props.movie.season}
                                </h3>
                                {
                                  props.movie.season >= 2 ?(
                                    <span style={{fontSize : '12px', fontWeight : 600, textTransform : 'capitalize' }}>seasons </span>
                                  ):(
                                    <span style={{fontSize : '12px', fontWeight : 600, textTransform : 'capitalize' }}>season </span>
                                  )
                                }
                            </div>
                          ):(
                            <div className='movie-rating'>
                                <FiStar className='icon-star' />
                                <span style = {{fontWeight : '600', fontSize : '12px'}}>{props.movie.rating}</span>
                            </div>
                          )
                        }
                </div>
            </div>
            <div className='firstEmpty'> </div>
            <Link to={url} className="btn-more">
                    <FiChevronDown />
            </Link>
          </div>
      </>
  )
}

export default SingleMovie
