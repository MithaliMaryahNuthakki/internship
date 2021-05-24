import React from 'react';
import {Navbar,Form,Button,Col,Row} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import '.././App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 function story() {
     return (
         <div >
            <Navbar collapseOnSelect expand="lg" className="Nav-background" style={{flexDirection:'row',justifyContent:'space-between ' }}>
                <NavLink to='/' style={{textDecoration: 'none',fontSize:'45px',fontWeight:'700',fontFamily:'Lucida Handwriting',textAlign:'center'}}>
                <img src="https://www.pngitem.com/pimgs/m/79-792312_transparent-write-icon-png-logo-writing-png-png.png"  style={{ height:'80px',width:'80px' ,paddingRight:'10px',marginLeft:'50px',borderRadius:'50%'}}/>
                <Navbar.Brand  className='brandName'>WRITE STORIES</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">                     
                </Navbar.Collapse>
            </Navbar>

            <div className='story-container' >
                <h1 style={{textAlign:'center'}}>TITLE</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter your Story in the below text area</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className='btn-grad' style={{border:'none',marginTop:'20px'}} type="submit">
                        Save
                    </Button>
                    <Button className='btn-grad' style={{border:'none',marginTop:'20px'}} type="submit">
                        Preview
                    </Button>
                    <Button className='btn-grad' style={{border:'none',marginTop:'20px'}} type="submit">
                        publish
                    </Button>
                </Form>
            </div>
         </div>
     )
 }
 
 export default story
 