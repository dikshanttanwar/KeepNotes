import { createSlice } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  notes : localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
};

export const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    createNote : (state,action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem('notes',JSON.stringify(state.notes))
      toast.success("Note Created")
    },
    updateNote : (state,action) => {
      const note = action.payload;
      const index = state.notes.findIndex((e)=>e._id === note._id);
      state.notes[index] = note;
      localStorage.setItem('notes',JSON.stringify(state.notes));
      toast.success("Note Updated!")
    },
    deleteNote: (state,action) => {
      const id = action.payload;
      state.notes = state.notes.filter((e)=>e._id !== id);
      localStorage.setItem('notes',JSON.stringify(state.notes))
      toast("Note Deleted!")
    },
    deleteAll:(state,action) => {
      state.notes = [];
      localStorage.setItem('notes',JSON.stringify(state.notes));
      toast.success("Cleared!")
    },
  },
});

export const {createNote,updateNote,deleteAll,deleteNote} = notesSlice.actions

export default notesSlice.reducer