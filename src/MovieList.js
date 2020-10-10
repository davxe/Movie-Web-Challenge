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
        axios.get(`https://www.omdbapi.com/?apikey=2341037e&s=${data}&type=movie`)
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
                            <div className='scrolling'>
                                    {
                                        this.state.movie.map((ele,i)=>{
                                            return (
                                                <div>
                                                    <Card>
                                                        <img src={ele.Poster} alt='movie' style={{height:'78px',width:'78px'}} className='img-rersponsive ml-3'></img>
                                                         <Card.Title key={i}><Link to={`/movie/${ele.imdbID}`}>{ele.Title}</Link>
                                                        </Card.Title></Card>
                                                </div>
                                            )
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