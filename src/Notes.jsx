import React, { useState } from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { deleteAll, deleteNote } from "./slice/NotesSlice";
import { NavLink } from "react-router-dom";


const Notes = () => {
  const notes = useSelector((state)=>state.notesReducer.notes);
  const [searchText,setSearchText] = useState('');
  const filteredData = notes.filter((e)=>e.title.toLowerCase().includes(searchText.toLowerCase()));
  const dispatch = useDispatch();
  // const deleteSingleNote = (id)=>{
  //   dispatch(deleteNote(id))
  // }
  function capitalizeFirstLetter(string) {
    if(string.length >=20){
      string = string.substring(0,19) + '...';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="relative w-[90%] min-h-[600px] m-auto mt-5 flex flex-col gap-5 items-center border-gray-400 border-[1px] shadow-xl p-5 rounded-xl">
      <h1 className="font-medium text-gray-700 text-xl">
        Notes you add appear here
      </h1>
      
      <div className="relative w-full flex justify-center">
          <button onClick={()=>{
            if(filteredData.length > 0){
              dispatch(deleteAll())
            }
            else{
              return;
            }
          }} className='absolute right-0 px-3 min-w-max py-1 outline-none border-gray-400 border-[1px] shadow-2xl rounded-md text-lg font-medium text-gray-700 hover:border-black ease-in-out duration-300'>
          Clear Notes</button>

        <input 
              type="text" 
              spellCheck='false'
              placeholder='Search note here....'
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              className='w-1/2 rounded-md px-3 py-1 text-gray-800 text-lg font-medium outline-none border-gray-400 border-[1px] shadow-2xl'
        />
      </div>
      <hr />

      <div className={`absolute top-40 w-[50%] h-[300px] flex flex-col justify-center items-center gap-5 ${filteredData.length > 0 ? 'hidden' : 'block'}`}>
        <div className="w-[40%] h-[40%]"><GrNotes className="w-full h-full text-gray-300" /></div>
        <h1 className="text-3xl text-gray-300 ">Notes you add appear here</h1>
      </div>

      <div className="w-full p-2 flex flex-wrap gap-5 justify-start ">

        {filteredData.map((note)=>{
          return (
            <div className="card w-60 h-40 p-3 relative rounded-md border-gray-400 border-[1px] flex flex-col justify-between hover:border-gray-400 ease-in-out duration-300 shadow-lg group overflow-hidden ">
  
              <span className="absolute right-2 top-2 w-5 h-5 cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300"><NavLink to={`/notes/${note._id}`}><MdOutlineOpenInNew className="w-full h-full" /></NavLink></span>
         
              <div className="w-full">
                <h1 className=" text-gray-700 text-lg font-medium">{capitalizeFirstLetter(note.title)}</h1>
                <h1 className="text-gray-700 line-clamp-3 font-light text-wrap">{note.content}</h1>
              </div>

              <div className="w-full flex justify-evenly">

                <div className="relative w-5 h-5 ">
                  <NavLink to={`/?noteId=${note?._id}`} >
                    <FiEdit className="icon w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300 " /> 
                  </NavLink>
                    <div className={`absolute hidden hover:text-blue-500 top-[-22px] text-sm left-[-3px]`}>Edit</div>
                </div>  

                <div className="w-[23px] h-[23px] "><AiOutlineDelete onClick={()=>dispatch(deleteNote(note._id))} className="w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300 " /></div>
                
                <div className="w-5 h-5 "><MdOutlineContentCopy onClick={()=>{
                  navigator.clipboard.writeText(note.content)
                  toast.info("Copied!")
                }} className="w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300 " /></div>

                <div className="w-5 h-5 "><FaRegShareFromSquare onClick={()=>{
                  const local = window.location.href
                  navigator.clipboard.writeText(local)
                  toast.success("Link Copied!");
                }} className="w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300 " /></div>

              </div>
              
          </div>
          )
        })}

      </div>

    </div>
  );
};

export default Notes;
