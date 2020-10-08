import React from 'react'
import axios from 'axios'
import {Card, Container, Row,Col} from 'react-bootstrap'

class MovieShow extends React.Component{
    constructor(){
        super()
        this.state={
            details:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.imdbID
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=2341037e`)
        .then(response=>{
            const details=response.data
            console.log('movie details',details)
            this.setState({details})
        })
    }
    render(){
        return(
            <div className='fluid-container' style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <h1 className='pt-5 pb-2' style={{textAlign:"center"}}>Movie Details </h1>
                <Container>
                        <Card.Body className='border rounded-lg pl-5 mt-5' style={{borderColor:'black'}}>
                            <Card.Header className='border-0 ml-3 mb-3'>
                                <h3><b>Movie Name - </b> {this.state.details.Title}</h3>
                            </Card.Header>
                                <Row>
                                    <Col md={6}><img src={this.state.details.Poster} alt='pic of candidate' className='img-rersponsive ml-3' style={{width:'auto',height:'auto'}}></img></Col>
                                    <Col md={6}>
                                        <p className='ml-3'>
                                            <b>Released on - </b> {this.state.details.Released} ({this.state.details.Country})<br/>
                                            <b>Genre - </b> {this.state.details.Genre}<br/>
                                            <b>Language - </b> {this.state.details.Language}<br/>
                                            <b>Actor - </b> {this.state.details.Actors}<br/><br/>
                                            <b>Description - </b>{this.state.details.Plot}<br/><br/>
                                            <b>Writer - </b>{this.state.details.Writer}<br/>
                                        </p>
                                    </Col>
                                </Row><br/>
                            <Card.Link href="/">back</Card.Link>
                        </Card.Body>
                </Container>
            </div>
        )
    }
}
export default MovieShow