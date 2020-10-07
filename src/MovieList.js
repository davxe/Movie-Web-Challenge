import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MovieList extends React.Component{
    constructor(){
        super()
        this.state={
            movie:[],
            data:'',
            // data:[]
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`http://www.omdbapi.com/?apikey=2341037e&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
            console.log('movie list',search)
            this.setState({movie:search})
        })
        .catch(err=>{
            console.log(err)
        })
        this.setState({
            search:e.target.value
        })
    }
    render(){
        console.log('state',this.state.movie)
        return(
            <div>
                <input type='search' name='data' onChange={this.handleSearch} placeholder='search title'></input>
                
                {
                    this.state.movie!=undefined?(
                        <div>
                            <ul>
                                {
                                    this.state.movie.map((ele,i)=>{
                                        return (<li key={i}><Link to={`/movie/${ele.imdbID}`}>{ele.Title}</Link></li>)
                                    })
                                }
                            </ul>
                        </div>):('')
                }
                
            </div>
        )
    }
}
export default MovieList