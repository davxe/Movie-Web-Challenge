import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieDetail'

function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <h2>Movie Web App!!!</h2>
                <Link to='/'></Link>

                <Route path='/' component={MovieList} exact={true}/>
                <Route path='/movie/:imdbID' component={MovieShow}/>
            </div>
        </BrowserRouter>
    )
}

export default App