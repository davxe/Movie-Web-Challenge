import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieDetail'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
function App(props)
{
    return(
        <BrowserRouter>
            <div>
                {/* <Link to='/'></Link> */}
                    <Route path='/' component={MovieList} exact={true}/>
                    <Route path='/movie/:imdbID' component={MovieShow}/>
            </div>
        </BrowserRouter>
    )
}

export default App