import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { createNote, updateNote } from './slice/NotesSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("noteId");
  const [title,setTitle] = useState('')
  const [value,setValue] = useState('')

  const notes = useSelector((state)=>state.notesReducer.notes);
  const note = notes.find((e)=>e._id === pasteId);
  useEffect(()=>{
    if(pasteId){
      const note = notes.find((e)=>e._id === pasteId);
      setTitle(note.title)
      setValue(note.content)
    }
    else{
      setTitle("")
      setValue("")
    }
  },[pasteId])

  const makeNote = ()=>{
    const note = {
      title : title.trim(),
      content : value.trim(),
      _id : pasteId || nanoid(),
      createAt : new Date().toDateString()
    }
    if(title.length >= 1 && value.length>=2){
      if(pasteId){
        dispatch(updateNote(note))
        navigate(-1)
      }
      else{
        dispatch(createNote(note))
      }
    }
    else{
      toast.warn('Note Cannot be blank!')
      return;
    }
    setTitle('')
    setValue('')
    setSearchParams({})
  }

  return (
    <div className='w-1/2 m-auto mt-5 flex flex-col gap-5 items-center border-gray-400 border-[1px] shadow-xl p-5 rounded-xl'>

        <div className='w-full flex gap-2 '>
          
            <button onClick={()=>navigate(-1)} className={`px-3 min-w-max py-1 outline-none border-gray-400 border-[1px] shadow-2xl rounded-md text-lg font-medium text-gray-500 hover:border-black ease-in-out duration-300 ${pasteId ? 'block' : 'hidden'}`} >
              {'Back'}
            </button>
            
            <input 
            type="text" 
            spellCheck='false'
            placeholder='Title....'
            value={title}
            // value={pasteId ? note.title : title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full rounded-md px-3 py-1 text-gray-800 text-lg font-medium outline-none border-gray-400 border-[1px] shadow-2xl'
            />

            <button onClick={makeNote} className='px-3 min-w-max py-1 outline-none border-gray-400 border-[1px] shadow-2xl rounded-md text-lg font-medium text-gray-700 hover:border-black ease-in-out duration-300'>
              {pasteId ? 'Update Note' : 'Create Note'}
            </button>
        </div>

        <div className='w-full rounded-md '>

            <div className='w-full flex gap-2 p-2 pl-3 '>
              <div className='w-4 h-4 rounded-full bg-[#ff5f57]'></div>
              <div className='w-4 h-4 rounded-full bg-[#febc2e]'></div>
              <div className='w-4 h-4 rounded-full bg-[#2dc842]'></div>
            </div>

            <textarea 
            name="" id=""
            rows={16}
            value={value}
            // value={pasteId ? note.content : value}
            onChange={(e)=>setValue(e.target.value)}
            spellCheck="false"
            placeholder='Take a note....'
            className='w-full h-screen-lg px-3 py-1 text-gray-800 text-lg font-normal outline-none border-gray-400 border-[1px] shadow-lg rounded-md'
            ></textarea>

        </div>

    </div>
  )
}

export default Home
