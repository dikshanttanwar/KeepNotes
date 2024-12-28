import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "react-toastify";

const ViewNote = () => {
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notesReducer.notes);
  const { id } = useParams();
  const note = notes.find((e) => e._id === id);
  return (
    <div className="w-1/2 m-auto mt-5 flex flex-col gap-5 items-center border-gray-400 border-[1px] shadow-xl p-5 rounded-xl">
      <div className="w-full flex gap-2 ">
        <input
          type="text"
          spellCheck="false"
          placeholder="Title...."
          value={note.title}
          disabled
          className="w-full rounded-md px-3 py-1 text-gray-800 text-lg font-normal outline-none border-gray-400 border-[1px] shadow-2xl"
        />

        <button
          onClick={() => navigate(-1)}
          className={`px-3 min-w-max py-1 outline-none border-gray-400 border-[1px] shadow-2xl rounded-md text-lg font-medium text-gray-700 hover:border-black ease-in-out duration-300 `}
        >
          {"Back"}
        </button>
      </div>

      <div className="w-full relative group">

        <div className="w-5 h-5 absolute right-5 top-3 ">
          <MdOutlineContentCopy onClick={() => {
            navigator.clipboard.writeText(note.content)
            toast.info("Copied!")
          }}className="  w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 ease-in-out duration-300 "
          />
        </div>
          
        <textarea
          name=""
          id=""
          rows={16}
          value={note.content}
          disabled
          spellCheck="false"
          placeholder="Take a note...."
          className="pr-12 tracking-wide overflow-y-scroll no-scrollbar w-full h-screen-lg px-3 py-1 text-gray-800 text-normal font-light outline-none border-gray-400 border-[1px] shadow-lg rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

export default ViewNote;
