import React from 'react'
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {

  const [book, setBook] = useState([]);

  useEffect(() => {
      const getBook = async () => {
          try {
              const res = await axios.get("http://localhost:4001/book");
              const data = res.data.filter((data) => data.category ==="Free");
              console.log(data);
              setBook(data);
          } catch (error) {
              console.log(error);
          }
      };
      getBook();
  }, []);
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free Books</h1>
      <p>No price on adventure, no cost for dreams, just open a book and sail endless streams. A treasure of stories,
         a gateway to light, where wisdom and wonder take limitless flight. No coin to barter, no fee to be found, 
         just pages of magic, where dreams are unbound. A gift of knowledge, a portal to see—where words are bound, 
         yet forever free.
        </p>
      </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
    </Slider>
    </div>
    </div>

    </>
  );
}

export default Freebook