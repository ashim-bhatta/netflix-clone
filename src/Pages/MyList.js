import React, {useContext} from 'react';
import Nav from '../Headers/Nav'
import SingleMovie from '../Body/SingleMovie'
import { MyListContext } from '../Context/MyListContext'

const MyList = () =>{
  const [ myList ] = useContext(MyListContext)
  return(
    <>
      <Nav />
        <div className='bundle-movie' style={{ marginTop : 0}}>
            <h1> My List </h1>
            {
              myList.length >= 1?(
                <div className='movies' >
                    {
                      myList.map((mov) => (
                        <SingleMovie movie={mov} key={mov.name}/>))
                    }
                </div>
              ): <h1> Nothing Found </h1>
            }
        </div>
    </>
  )
}

export default MyList
