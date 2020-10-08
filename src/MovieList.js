import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container ,Card, Form} from 'react-bootstrap'

class MovieList extends React.Component{
    constructor(){
        super()
        this.state={
            movie:[],
            data:'',
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`http://www.omdbapi.com/?apikey=2341037e&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
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
        return(
            <div className='fluid-container'style={{height:'100%'}}>
                <Container>
                    <h1 className='pt-5 pb-2' style={{textAlign:"center",fontSize:'34px'}}>Search Your Movie Name </h1>
                    <Form.Control size='lg'
                        type='search' 
                        name='data'   
                        onChange={this.handleSearch} 
                        placeholder='search movie by title'
                    />
                    {
                        this.state.movie!==undefined?(
                            <div>
                                    {
                                        this.state.movie.map((ele,i)=>{
                                            return (<Card.Title key={i}><Link to={`/movie/${ele.imdbID}`}>{ele.Title}</Link></Card.Title>)
                                        })
                                    }
                            </div>):('')
                    }
                </Container>
            </div>
        )
    }
}
export default MovieList