import { Component } from "react";
import {Col,Row, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Album extends Component {
    state={
        movie: []
    }
    async componentDidMount (){
        const response = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
        const movie = await response.json()
        this.setState({
            movie:movie.data
        })
        console.log(this.state.movie)
    }
    render(){
        return(
        <>
           
          
               <Container className='d-flex ' style={{marginLeft:'17rem'}}>
            
                 <Row>
                     {
                 this.state.movie.map(m =>
                
                   <Col key={m.id}className="mb-3" xs={6} md={4} lg={3}>
                
                       <Card style={{objectFit:'cover',height:'20rem'}} >
                           <Link to={'/album/' + m.album.id}><Card.Img style={{objectFit:'cover',height:'14rem'}} variant="top" src={m.album.cover_medium} /></Link>
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                            </Card.Body>
                        </Card>
                      
                   </Col>
                   
               )
                 }
               </Row>
                </Container>
           
        </>
        )

    }
}
export default Album