// import React from "react";

// function Cards({ item }) {
//   console.log(item)
//   return (
//     <>
//     <div className="mt-4 my-3 p-3">
//     <div className="card bg-base-100 w-92 shadow-xl">
//   <figure>
//     <img
//       src={item.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {item.name}
//       <div className="badge badge-secondary">{item.category}</div>
//     </h2>
//     <p>{item.title}</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">${item.price}</div>
//       <div className="cursor-pointer px-2 py-3 rounded-lg badge border-black hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
//     </div>
//   </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Cards;








import React from 'react';

function Cards({ item }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
      {/* Image */}
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md" />

      {/* Title */}
      <h2 className="text-lg font-bold mt-4 text-gray-800">{item.title}</h2>

      {/* Description - Ensuring Equal Height */}
      <p className="text-gray-600 flex-grow mt-2 text-sm leading-relaxed">{item.description}</p>

      {/* Category and Price */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs font-semibold bg-pink-500 text-white px-3 py-1 rounded-full shadow-md">
          {item.category}
        </span>
        <span className="text-gray-900 font-semibold">${item.price}</span>
      </div>

      {/* Buy Button - No Change in CSS */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full font-semibold shadow-md hover:bg-blue-600 transition duration-300">
        Buy Now
      </button>
    </div>
  );
}

export default Cards;
