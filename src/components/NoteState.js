import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const noteContext=createContext();

export default function NoteState(props) {
  const [noteState, setNoteState] = useState({query: ''});
  const updateContextState = (newState) => {
    setNoteState(() => ({
      ...newState
    }));
  };
  return (
    <noteContext.Provider value={{...noteState,updateContextState}}>
      {props.children}
    </noteContext.Provider>
  )
}
// export const useData=()=>useContext(noteContext)