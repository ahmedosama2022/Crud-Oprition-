import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Add = () => {
  const [title, settitle] = useState("");
  const [price, setPrice] = useState(0)
     
  
  const handleSubmit = (e) =>{
   
    e.preventDefault();

    console.log("title",title);
  console.log("price", price)
  }
  return (
    <div className='add'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label   value={title}   onChange={(e) => settitle(e.target.Value)}>Title </Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label onChange={(e) => setPrice(e.target.Value)}>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Add
