import React, { useState, createContext } from 'react'
 import movie from '../movies'

export const MovieContext = createContext();
export const MovieProvider = (props) =>{
    const [ movies, setMovies] = useState([...movie])
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
