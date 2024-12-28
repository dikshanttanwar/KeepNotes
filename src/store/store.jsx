import {configureStore} from '@reduxjs/toolkit'
import notesReducer from '../slice/NotesSlice'

export const store = configureStore({
    reducer:{
        notesReducer:notesReducer,
    }
})