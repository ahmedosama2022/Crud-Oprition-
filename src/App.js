
import { useEffect, useState } from 'react';
import './App.css';
import Body from './Body';
import Swal from 'sweetalert2';
function App() {
    const [prodect, setProdet] = useState([]);
    const fetchItems =  () => {
      fetch("https://fakestoreapi.com/products" )
      .then((res) =>{ res.json().then((data) => {
        console.log(data)
      setProdet(data)
      })
    })};




    
    function deletProdect(prodect){
      Swal.fire({
        title: `Are You Sure To Delete ${prodect.title} ?`,
        showCancelButton: true
      }).then((data) => {
       if (data.isConfirmed) {
        console.log('id', prodect.id)
        fetch(`https://fakestoreapi.com/products/${prodect.id}`,{
          body: JSON.stringify({
            data
           })
          }).then(res => res.text())
            console.log('delete response', data)
         fetchItems()
         
       }
      })
     
     };
  useEffect(() => {
    fetchItems();
 
   },[])
  return (
   <div>
    <div className='nav'>
      <h4>LOGO</h4>
      <h4>Home</h4>
    </div>
     <div className="App">
       <Body prodect={prodect} deletProdect={deletProdect} />
    </div>
   </div>
  );
}

export default App;
