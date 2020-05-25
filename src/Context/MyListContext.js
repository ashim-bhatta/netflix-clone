import React, { useState, createContext, useEffect } from 'react';
import movies from '../movies.js'

export const MyListContext = createContext();
// localStorage.removeItem('myList')
  const initialState = JSON.parse(localStorage.getItem('myList')) || []
  export const MyListProvider = (props) =>{
  const [myList, setMyList] = useState(initialState)

  const addToMyList= (movieId) =>{
    const movie = movies.find( ({ id }) => id === movieId );
    setMyList(oldArray => [...oldArray, movie]);
  }
  const removeFromList = (movieId) =>{
    const movie = myList.filter((mov) => mov.id != movieId)
    setMyList(movie);

  }

  useEffect(()=>{
    localStorage.setItem('myList', JSON.stringify(myList))

  },[myList])

  return(
    <MyListContext.Provider value = {[myList, addToMyList, removeFromList]}>
            {
              props.children
            }
    </MyListContext.Provider>
  )
}
