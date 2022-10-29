import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [login,setLogin]=useState(false)

  const aboutClick = () => {
    if(!login){
    user.push(email);
    localStorage.setItem("data", JSON.stringify(user))
    alert("kayıt yapıldı")
    setLogin(true)
    }
    if(login){
        navigate("/about", { state: email })
    }
  };

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("data")) || [];
  }, []);
  return (
    <div className="flex justify-between  items-center bg-slate-300 px-5 py-10 text-lg font-bold text-emerald-900 shadow-2xl shadow-black ">
      <p className="bg-slate-100 px-2 py-1 rounded-lg hover:bg-slate-400 hover:text-white duration-[5000ms] active:scale-95 w-[200px] text-center ">
        REACT
      </p>
      <Link
        to="/"
        className="bg-slate-100 px-2 py-1 rounded-lg hover:bg-slate-400 hover:text-white duration-[5000ms] active:scale-95 w-[200px] text-center"
      >
        Home
      </Link>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="px-6
      py-2.5
      bg-slate-200
      font-bold
      text-lg
      text-emerald-900
      leading-tight
      uppercase
      rounded
      shadow-md
      transition
      duration-150
      ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Premium 
        </button>
        {/* Modal */}
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-md font-medium leading-normal text-gray-800 uppercase"
                  id="exampleModalLabel"
                >
                  About sayfasına giriş yapmak için email girin!
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <input
                type="email"
                className="w-[80%] bg-slate-300 mx-auto my-5 rounded-md indent-2 py-2"
                placeholder="E-mail giriniz..."
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button onClick={()=>setLogin(!login)}
                  type="button"
                  className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                >
                  {login ? "üye kaydı" : "üye girişi"}
                </button>
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                  onClick={() => aboutClick()}
                >
                  {login ? "Login" : "Register"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
