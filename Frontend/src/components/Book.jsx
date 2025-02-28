import { useState, useEffect } from 'react';
import React from 'react'
import Cards from "./Cards"
import {Link} from "react-router-dom"
import axios from "axios";

function Book() {

  const [book, setBook] = useState([]);

  useEffect(() => {
      const getBook = async () => {
          try {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              setBook(res.data);
          } catch (error) {
              console.log(error);
          }
      };
      getBook();
  }, []);
  

  return <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='flex flex-col items-center justify-center text-center mt-28'>
    <h1 className='text-2xl md:text-4xl font-bold'>Un Monde de Livres, Une Vie d’Histoires</h1>
    <p className='mt-6 max-w-2xl'>
      The only place where you can time travel, live a hundred lives, and still be in your pajamas. 
      Whether you’re solving mysteries, falling in love, or battling dragons, every page is an adventure 
      with zero physical exercise required. So grab a book, get comfy, and let’s turn some pages—
      because reality is overrated!
    </p>
    <Link to="/">
    <button className=' mt-6 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link>
  </div>

   <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       {
        book.map(item=>(
          <Cards key={item.id} item={item}/>
        ))
       }
   </div>

</div>

  
  </>
  
  
}
export default Book;