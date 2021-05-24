import React from 'react'
import {Navbar,Form,Button,Col,Row} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import '.././App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function write() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="Nav-background" style={{flexDirection:'row',justifyContent:'space-between ' }}>
                <NavLink to='/' style={{textDecoration: 'none',fontSize:'45px',fontWeight:'700',fontFamily:'Lucida Handwriting',textAlign:'center'}}>
                <img src="https://www.pngitem.com/pimgs/m/79-792312_transparent-write-icon-png-logo-writing-png-png.png"  style={{ height:'80px',width:'80px' ,paddingRight:'10px',marginLeft:'50px',borderRadius:'50%'}}/>
                <Navbar.Brand  className='brandName'>WRITE STORIES</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">                     
                </Navbar.Collapse>
            </Navbar>

            <div className='conatiner' style={{padding:'100px',}}>
                <h2 style={{textAlign:'center'}}>Story Details</h2>
                <Form style={{color:'#e49b06'}}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                         <Form.Control type="text" placeholder="Title" />
                        <Form.Text className="text-muted">
                        Choose an appropriate title that you think best fits the story plot
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formDescription" style={{paddingTop:'20px'}}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={10} />
                        <Form.Text className="text-muted">
                        Give a brief summary of the plot or an extract from the story so that the reader can understand a little more about the story
                        </Form.Text>
                    </Form.Group>  
                    <Row style={{paddingTop:'20px'}}>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control as="select">
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>FanFiction</option>
                            <option>Fantasy</option>
                            <option>Romance</option>
                            <option>Horror</option>
                            <option>Humor</option>
                            <option>Mystry</option>
                            <option>Historical Fiction</option>
                            </Form.Control>
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group controlId="formAudience">
                            <Form.Label>Target Audience</Form.Label>
                            <Form.Control as="select">
                            <option>Middle Grade(8-13years)</option>
                            <option>Young Adult(13-18years)</option>
                            <option>New Adult(18-25 years)</option>
                            <option>Adults(25+ years)</option>                        
                            </Form.Control>
                        </Form.Group> 
                    </Col>
                    <Col>  
                        <Form.Group controlId="fromLanguage">
                            <Form.Label>Language</Form.Label>
                            <Form.Control as="select" >
                            <option>English</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                            <option>Telugu</option>
                            <option>Tamil</option>
                            <option>Marathi</option>
                            <option>Nepali</option>
                            </Form.Control>
                        </Form.Group> 
                    </Col>  
                    </Row>   
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label=" Copyright"
                        style={{paddingTop:'20px'}}
                    />      
                    
  
                    <Link to='/story' variant="primary" type="submit" className='btn-grad' style={{border:'none',marginTop:'20px'}}>
                        Submit
                    </Link>
                </Form>                  

            </div>
        </div>
    )
}

export default write
