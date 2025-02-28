// import React from 'react';
// import Login from "./Login";

// function Signup() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="border-2 shadow-lg p-6 rounded-lg w-full max-w-md bg-white relative">
//         {/* Close Button */}
//         <button
//           onClick={() => window.history.back()} // Redirects to the previous page
//           className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//         >
//           ✕
//         </button>

//         {/* Signup Title */}
//         <h3 className="font-bold text-lg text-center">Signup</h3>

//         {/* Name Input */}
//         <div className="mt-4 space-y-2">
//           <label className="block">
//             <span>Name</span>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full px-3 py-2 border rounded-md outline-none"
//             />
//           </label>
//         </div>

//         {/* Email Input */}
//         <div className="mt-4 space-y-2">
//           <label className="block">
//             <span>Email</span>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-3 py-2 border rounded-md outline-none"
//             />
//           </label>
//         </div>

//         {/* Password Input */}
//         <div className="mt-4 space-y-2">
//           <label className="block">
//             <span>Password</span>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border rounded-md outline-none"
//             />
//           </label>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex flex-col items-center mt-4 space-y-3">
//           <button className="w-full bg-pink-600 text-white rounded-md px-4 py-2 hover:bg-pink-800 duration-200">
//             Signup
//           </button>
//           <p>
//             Have an account?{" "}
//             <button
//               className="underline text-blue-500 cursor-pointer"
//               onClick={() => document.getElementById("my_modal_3").showModal()} // Open the Login Modal
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>

//       <Login />
//     </div>
//   );
// }

// export default Signup;




// import React from "react";
// import { useForm } from "react-hook-form";
// import Login from "./Login";

// function Signup() {
//   const { register, handleSubmit } = useForm();

//   // Handle form submission
//   const onSubmit = (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="border-2 shadow-lg p-6 rounded-lg w-full max-w-md bg-white relative">
//         {/* Close Button */}
//         <button
//           onClick={() => window.history.back()} // Redirects to the previous page
//           className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//         >
//           ✕
//         </button>

//         {/* Signup Title */}
//         <h3 className="font-bold text-lg text-center">Signup</h3>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Name Input */}
//           <div className="mt-4 space-y-2">
//             <label className="block">
//               <span>Name</span>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-3 py-2 border rounded-md outline-none"
//                 {...register("name", { required: true })}
//               />
//             </label>
//           </div>

//           {/* Email Input */}
//           <div className="mt-4 space-y-2">
//             <label className="block">
//               <span>Email</span>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//             </label>
//           </div>

//           {/* Password Input */}
//           <div className="mt-4 space-y-2">
//             <label className="block">
//               <span>Password</span>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-3 py-2 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//             </label>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex flex-col items-center mt-4 space-y-3">
//             <button
//               type="submit"
//               className="w-full bg-pink-600 text-white rounded-md px-4 py-2 hover:bg-pink-800 duration-200"
//             >
//               Signup
//             </button>
//             <p>
//               Have an account?{" "}
//               <button
//                 className="underline text-blue-500 cursor-pointer"
//                 onClick={() => document.getElementById("my_modal_3").showModal()} // Open the Login Modal
//               >
//                 Login
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>

//       <Login />
//     </div>
//   );
// }

// export default Signup;







import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;