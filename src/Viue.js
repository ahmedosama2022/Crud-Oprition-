import Button from 'react-bootstrap/Button';
import React from 'react'
import Table from 'react-bootstrap/Table';

const Viue = ({prodect, deletProdect}) => {
 
  return (
    <div className='viaue'>
          <Table striped bordered hover>  
       <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Operation</th>
        </tr>
      </thead>
   {
    prodect.map((prodect) => (
      <tbody key={prodect.id}>
        <tr>
        <th>{prodect.id}</th>
          <th>{prodect.title}</th>
          <th>{prodect.price}</th>
          <td className='but'> <Button className='bt2' type='button' variant="danger">Add</Button> 
          <Button className='bt1' variant="info" onClick={() => deletProdect(prodect)}>Delet</Button> </td>
        </tr>
        
      </tbody>
    
    ))
   }
       
   </Table>
    
    </div>
  )
}

export default Viue
