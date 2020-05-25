import React, { useState, useContext } from 'react'
import Nav from "./Nav"
import HeaderContent from './HeaderContent'
import { MovieContext } from '../Context/MovieContext'
import { MyListContext } from '../Context/MyListContext'

import '../css/Header/header.css'

const Header =() =>{
  const [ movies ] = useContext(MovieContext)
  const [randomMovie, setRandomMovie] = useState()
  const [ myList, addToMyList, removeFromList ] = useContext(MyListContext)
  const ranNum= Math.floor(Math.random() * 10)
  const sliceMovie = movies.slice(-11, -1)


  const style = {
    'width' : '100%',
    'height' : '100vh',
    'background': `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0.7) 100%),url(${sliceMovie[ranNum].poster})`,
    'overflow' : 'hidden'
  }

    return (
        <header className ="header" style={style}>
            <Nav />
            <HeaderContent
                movie ={sliceMovie[ranNum]}
                addToMyList={addToMyList}
                removeFromList={removeFromList}
                myList = {myList}/>
        </header>
    )
}

export default Header
