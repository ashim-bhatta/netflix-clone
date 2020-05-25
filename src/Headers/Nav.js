import React, {useState, createRef, useEffect} from 'react'
import { FiSearch } from 'react-icons/fi';

import { NavLink  } from 'react-router-dom'


function Nav() {
  const textInput = React.useRef();
  const [ searchValue, setSearchValue ] = useState('')
  const [ isSearchBar, setIsSearchBar ] = useState(false)


  const toogleSearchBar = () =>{

    setIsSearchBar(prev => !prev);
  }

  useEffect(() =>{
    if(isSearchBar){
      document.getElementById('search-bar').style.width='120px'
      document.getElementById('search-bar').style.paddingLeft='10px'
    }
    else{
      document.getElementById('search-bar').style.width='0px'
      document.getElementById('search-bar').style.paddingLeft='0px'
    }
  },[isSearchBar])
    return (
        <nav className= "Nav">
            <div className="logo">
                <img src="https://img.icons8.com/color/104/000000/netflix.png"/>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-list-item">
                        <NavLink exact  activeClassName ='is-active'  to='/' className="menu-list-link">
                            home
                        </NavLink >
                    </li>
                    <li className="menu-list-item">
                        <NavLink exact  activeClassName ='is-active'  to='/movies' className="menu-list-link">
                            movie
                        </NavLink >
                    </li>
                    <li className="menu-list-item">
                        <NavLink exact  activeClassName ='is-active'  to='/series' className="menu-list-link">
                            series
                        </NavLink >
                    </li>
                    <li className="menu-list-item">
                        <NavLink exact  activeClassName ='is-active'  to='/my-list' className="menu-list-link">
                            my list
                        </NavLink >
                    </li>
                    <li className="menu-list-item search">
                        <form>
                            <input
                                type='text'
                                value = {searchValue}
                                onChange = {(e) => setSearchValue(e.target.value)}
                                className = 'search-bar'
                                id = 'search-bar'
                                placeholder = 'Title, Genre'
                                ref = {textInput}
                              />
                        </form>
                        <FiSearch
                            className='icon-search'
                            onClick = {toogleSearchBar}
                        />
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav
