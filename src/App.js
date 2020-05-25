import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import MyList from './Pages/MyList'
import SearchResult from './Pages/SearchResult'
import SingleMovieDetail from './Body/SingleMovieDetail'
import { MovieProvider} from './Context/MovieContext'
import { MyListProvider} from './Context/MyListContext'
import {
          BrowserRouter as Router,
          Switch,
          Route
        } from 'react-router-dom';


function App(props) {
  return (
    <Router>
        <MovieProvider>
        <MyListProvider>
        <Switch>

        // home component
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/movies'>
                <Movies />
            </Route>

            <Route exact path='/series'>
                <Series />
            </Route>

            <Route exact path='/my-list'>
                <MyList />
            </Route>

            <Route exact path='/q=:query' render={ SearchResult } />


            <Route  path='/:type/:name' render={ SingleMovieDetail} />

            <Route render={() => <h1> Page Not Found </h1>} />

        </Switch>
        </MyListProvider>
        </ MovieProvider>
    </Router>
  );
}

export default App;
