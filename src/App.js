import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieDetail'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <Link to='/Movie-Web-Challenge'></Link>
                <Switch>
                    <Route path='/Movie-Web-Challenge' component={MovieList} exact={true}/>
                    <Route path='/movie/:imdbID' component={MovieShow}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App