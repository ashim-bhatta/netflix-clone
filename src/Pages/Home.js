import React, {useState, useEffect, useContext} from 'react';
import Header from '../Headers/Header';
import AllMovie from '../Body/AllMovie'
import { MovieContext } from '../Context/MovieContext'
import { MyListContext } from '../Context/MyListContext'


function Home() {
  const [ movies ] = useContext(MovieContext)
  const [ myList ] = useContext(MyListContext)
  const [chunkMovie, setChunkMovie] = useState([])
  const [onlySeries, setOnlySeries] = useState([])
  const [onlyMovie, setOnlyMovie] = useState([])
  const [isMyList, setIsMyList] = useState(false)

    // getting 5 myList to display on home
  const chunkOFMyList = () => {
    const slicedMovie = myList.slice(-6)
      setChunkMovie(slicedMovie.reverse())
  }

  // getting 5 series to display on home
  const chunkOfSeries = () => {
    const newSeriesArray = []
    
    movies.map((series) =>{
      if(series.type==='series'){
        newSeriesArray.push(series)
      }
    })
    const slicedSeries = newSeriesArray.slice(-6)
    setOnlySeries(slicedSeries.reverse())
  }

  // getting 5 movies to display on home
  const chunkOfMovie = () => {
    const newMovieArray = []
    movies.map((movie) =>{
      if(movie.type==='movies'){
        newMovieArray.push(movie)
      }
    })
    const slicedMovie = newMovieArray.slice(-6)
    setOnlyMovie(slicedMovie.reverse())
  }



useEffect(() =>{
 chunkOfSeries()
 chunkOfMovie()
}, [])

useEffect(() =>{
 chunkOFMyList()

}, [myList])
  return (
    <div className="Home">
        <Header />
        <AllMovie
                movies = {chunkMovie}
                title={'My List'}
                link={'/my-list'}
        />
        <AllMovie
                movies = {onlyMovie}
                title={'Latest Movie'}
                link={'/movies'}
        />

        <AllMovie
                movies = {onlySeries}
                title={'Latest Series'}
                link={'/series'}
        />
    </div>
  );
}

export default Home;
