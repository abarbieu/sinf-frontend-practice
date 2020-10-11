import React, { useState } from "react";
import axios from "axios";

export default function NotesPage() {
   const [notes, setNotes] = useState([]);

   const apiUrl = "http://localhost:54321/notes/";

   //! return array of notes from backend
   const getNotes = () => {
      axios
         .get(apiUrl)
         .then((res) => {
            return res.data.map((note) => {
               setNotes(res.data);
            });
         })
         .catch((err) => {
            console.error(err);
         })
         .then(() => {
            console.log("finished");
         });
   };

   const createNote = () => {
      axios.post(apiUrl, JSON.stringify({ title: "title" }));
   };

   return (
      <div>
         <button onClick={getNotes}>Press Me</button>
         {notes.map((note) => {
            return (
               <div key={note.id}>
                  <h1>{note.title}</h1>
                  <p className='dark-color'>{note.content}</p>
               </div>
            );
         })}
         <button onClick={createNote}>Add Note</button>
      </div>
   );
}
