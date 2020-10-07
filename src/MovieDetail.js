import React from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MovieShow extends React.Component{
    constructor(){
        super()
        this.state={
            details:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.imdbID
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=2341037e`)
        .then(response=>{
            const details=response.data
            console.log('movie details',details)
            this.setState({details})
        })
    }
    render(){
        console.log('details',this.state.details.title)
        return(
            <div>
                <Card style={{ width: '22 rem' }}>
                    <Card.Img variant="top" src={this.state.details.Poster} width='220 rem'/> 
                    <Card.Body>
                        <Card.Title>
                            <b>Movie Name:--- {this.state.details.Title}</b>
                        </Card.Title>&nbsp;
                        <Card.Subtitle className="mb-2 text-muted">
                            <b>
                                Released on- {this.state.details.Released}<br/>
                                RunTime:- {this.state.details.Runtime}<br/>
                                {/* <b>Year of release:- {this.state.details.Year} <br/> */}
                                country:--{this.state.details.Country}<br/>
                                Genre - {this.state.details.Genre}<br/>
                                Language - {this.state.details.Language}
                            </b>
                        </Card.Subtitle>
                        <Card.Text>
                            <b>Actors:----{this.state.details.Actors}</b><br/>
                            <b>{this.state.details.Plot}</b>
                        </Card.Text>
                        <Card.Link href="/">back</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MovieShow